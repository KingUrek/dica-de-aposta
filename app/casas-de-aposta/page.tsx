import React from 'react'
import { getBookmakers } from '../../lib/api'
import Container from '../../components/ui/container'
import BookMakerArchive from '../../components/BookMakerArchive'

export default async function CasasDeAposta() {

  
  return (
    <Container className='mt-28 flex flex-col'>
      <BookMakerArchive></BookMakerArchive>
    </Container>
  )
}
