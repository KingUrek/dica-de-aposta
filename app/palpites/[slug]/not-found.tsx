import Header from 'components/Header/Header';
import BackButton from 'components/ui/BackButton';
import Container from 'components/ui/container';

export default function NotFound() {
  return (
    <>
      <Header />
      <div className='bg-primary bg-opacity-5'>
        <Container>
          <BackButton></BackButton>
          <h1 className=' text-primary-desatured tablet:text-primary-dark text-36 font-bold font-tittilium text-center mt-[112px] tablet:text-64 tablet:mt-[250px]'>
            404
          </h1>
          <p className='text-primary-desatured tablet:text-primary-dark  text-20 font-bold font-tittilium mt-5 text-center tablet:text-40 tablet:mt-20'>
            OPS! Não encontramos essa página.
          </p>
          <p className='text-primary-gray text-center text-14 leading-11 mb-[138px] mt-12 tablet:text-20 tablet:mt-16 tablet:mb-[250px]'>
            Pedimos desculpas mas o endereço que inseriu não se encontra
            disponível.
          </p>
        </Container>
      </div>
    </>
  );
}
