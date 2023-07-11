const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL as RequestInfo;
async function fetchAPI(query = '', { variables }: Record<string, any> = {}) {
  const headers = { 'Content-Type': 'application/json' };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }
  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL + 'graphql', {
    next: { revalidate: 0 },
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  );
  return data.post;
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  return data?.posts;
}

export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  );

  return data?.posts;
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === 'draft';
  const isRevision = isSamePost && postPreview?.status === 'publish';
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ''
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? 'DATABASE_ID' : 'SLUG',
      },
    }
  );

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;

    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop();

  return data;
}

export async function getFooter() {
  const data = await fetchAPI(
    `
    query Footer {
      crbThemeOptions {
        contactEmail
        contactMobile
        institutionalDescription
        logoImage
        urlDiscord
        urlTelegram
        urlTwitter
        urlTips
      }
    }
  `
  );
  return data.crbThemeOptions;
}

export async function getBookmakers(homeplace?: string, page = 1, perPage=4) {
  
  const query = homeplace ? `(first:${page * perPage}, where: {homePlace: "${homeplace}"})` : `(first:${page * perPage})`;
  
  const data = await fetchAPI(
    `
    query bookmakersInfo {
      bookmakers${query} {
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
        nodes {
          databaseId
          title
          bookmakerUrl
          isBonus
          featuredImage {
            node {
              databaseId
              altText
              title
              description
              sourceUrl
              caption
              sizes
              fileSize
              srcSet
            }
          }
          bookmakerBonus
          bookmakerDescription
          bookmakerId
          bookmakerAdventages {
            adventage
          }
        }
      }
    }
  `
  );
  return data.bookmakers;
}

export async function getTelegramLink() {
  const data = await fetchAPI(
    `
      query Footer {
        crbThemeOptions {
          urlTelegram
        }
      }
    `
  );
  return data.crbThemeOptions;
}

export async function getSportCarousel() {
  const data = await fetchAPI(
    `
    query SportItems {
      carouselSportItems {
        termId
        description
        name
        slug
        url
        taxonomy
        sportIcon
        sportImage
        carouselUntil
      }
    }

`
  );
  return data.carouselSportItems;
}

export async function getHighlightTip(slug='') {
  const data = await fetchAPI(
    `
    query HighlightTip {
      highlightTip(tournament: "${slug}") {
        title
        image
        link
        slug
        teams {
          name
          logo
        }
        tournamentName
        location
        eventTime
        bookmakerOdds {
          bookmakerName
          bookmakerLogo
          odd
        }
      }
    }

`
  );
  return data.highlightTip;
}

export async function getAllTips(slug='', page=1, perPage=6) {
  const data = await fetchAPI(
    `
    {
      tips(first:${page * perPage}, where: {tournament: "${slug}"}) {
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        nodes {
          id
          content
          tipTournaments {
            name
          }
          tipBookmakers {
            bookmaker_odd
            single_bookmaker {
              title
              featuredImage {
                node {
                  mediaItemUrl
                }
              }
            }
          }
          tipTimes {
            databaseId
            teamLogo
            title
          }
          databaseId
          slug
          title
          uri
          tipContent
          tipBetUrl
          tipEventDatetime
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }

`
  );
  return data.tips;
}

export async function getMultiples(slug='',activeOnly=false) {
  const data = await fetchAPI(
    `
    {
      multiples(where: {active: ${activeOnly?'true':'false'}, tournament: "${slug}"}) {
        nodes {
          databaseId
          title
          excerpt
          multipleExternal
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
          matches {
            description
            matchTime
            matchTournament {
              databaseId
              slug
              name
            }
            match {
              databaseId
              title
              teamLogo
            }
          }
          multipleBookmaker {
            databaseId
            title
            link
            bookmakerUrl
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
          multipleProfit
          multipleHasTimeout
          multipleUntil
        }
      }
    }

`
  );
  return data.multiples.nodes;
}

export async function search(search:string, page=1, postsperpage=5) {
  const data = await fetchAPI(
    `
    {
      tips(where: {search: "${search}"}, first: 30) {
        edges {
          node {
            tipContent
            content
              id
              title
              uri
              tipBookmakers {
                single_bookmaker {
                  bookmakerUrl
                  featuredImage {
                    node {
                      altText
                      sourceUrl
                      srcSet
                    }
                  }
                }
              }
          }
        }
      }
    }
`
  );
  return data.tips.edges;
}

export async function getTournaments() {
  const data = await fetchAPI(
    `
    {
      tournaments(first: 1000) {
        nodes {
          name
          slug
          uri
          databaseId
          children {
            nodes {
              name
              slug
              uri
              databaseId
            }
          }
          parent {
            node {
              name
              slug
              uri
              databaseId
            }
          }
        }
      }
    }

`
  );
  return data.tournaments.nodes;
}

export async function getTipBySlug(slug:string) {
  const data = await fetchAPI(
    `
    {
      tip(id: "${slug}", idType: SLUG) {
        id
        content
        tipTournaments {
          name
        }
        tipBookmakers {
          bookmaker_odd
          single_bookmaker {
            title
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
        tipTimes {
          databaseId
          teamLogo
          title
        }
        databaseId
        slug
        title
        uri
        tipContent
        tipBetUrl
        tipEventDatetime
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }

`
  );
  return data.tip;
}

export async function getQuestions() {
  const data = await fetchAPI(
    `
    query questions {
      questions {
        nodes {
          databaseId
          title
          questionAnswer
        }
      }
    }
`
  );
  return data.questions.nodes;
}




