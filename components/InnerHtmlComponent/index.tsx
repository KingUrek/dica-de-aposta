'use client'
export default function InnerHtmlComponent({children,...rest}) {
  return (
    <div {...rest} dangerouslySetInnerHTML={{__html:children}}/>
  )
}
