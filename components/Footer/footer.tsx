import Image from 'next/image';
import Logo from '../../public/logo.png';
import ZapIcon from '../../public/icons/WhatsappIcon.svg';
import MailIcon from '../../public/icons/MailIcon.svg';
import TelegramIcon from '../../public/icons/TelegramIcon.svg';
import TwitterIcon from '../../public/icons/TwitterIcon.svg';
import DiscordIcon from '../../public/icons/DiscordIcon.svg';
import ToTopButton from './ToTopButton';
import { getFooter } from '../../lib/api';
import Link from 'next/link';
import InnerHtmlComponent from '../InnerHtmlComponent';
import Container from '../container';

export default async function FooterUi() {
  const data = await getFooter();
  return (
    <footer className='bg-primary pt-12 pb-5 tablet:pt-24'>
      <Container>
        <Link href={'/'}>
      <div className='pb-5 tablet:pb-8 border-b border-white mb-20 max-w-[450px] tablet:mb-16'>
        <Image src={Logo} alt='logo'></Image>
          </div>
        </Link>
          
      <div className='tablet:flex tablet:justify-between border-b border-white mb-5'>
        <div className='mb-10 tablet:max-w-[340px]'>
          <p className='text-16 font-bold text-white [&strong]:text-teal mb-5 tablet:mb-8'>
            Institucional
          </p>
          <InnerHtmlComponent className="text-white">{data.institutionalDescription}</InnerHtmlComponent>
        </div>
        <div className='mb-10 tablet:max-w-[340px]'>
          <p className='text-16 font-bold text-white  mb-5 tablet:mb-8'>Contato</p>
          <div className='flex items-center gap-7 mb-5'>
            <ZapIcon />
            <span className='text-white'>{data.contactMobile}</span>
          </div>
          <div className='flex items-center gap-7 mb-5'>
            <MailIcon />
            <span className='text-white'>{data.contactEmail}</span>
          </div>
        </div>
        <div className='tablet:max-w-[340px]'>
          <p className='text-16 font-bold text-white mb-5 tablet:mb-8'>Siga-nos</p>
          <div className='flex gap-7 pb-10 tablet:mb-8 relative'>
            <Link href={data.urlTelegram}>
              <TelegramIcon className="tablet:scale-[1.3]"></TelegramIcon>
            </Link>
            <Link href={data.urlTwitter}>
              <TwitterIcon className="tablet:scale-[1.3]"></TwitterIcon>
            </Link>
            <Link href={data.urlTelegram}>
            <DiscordIcon className="tablet:scale-[1.3]"></DiscordIcon>
            </Link>
            <ToTopButton ></ToTopButton>
          </div>
        </div>
      </div>

      <p className='text-10 text-white  text-center'>
        Desenvolvido por <strong>Apiki Wordpress</strong> | Todos os direitos
        reservados.
        </p>
      </Container>
        
      </footer>
      
  );
}
