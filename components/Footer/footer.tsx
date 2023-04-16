import Image from 'next/image';
import Logo from '../../public/logo.png';
import ZapIcon from '../../public/icons/WhatsappIcon.svg';
import MailIcon from '../../public/icons/MailIcon.svg';
import TelegramIcon from '../../public/icons/TelegramIcon.svg';
import TwitterIcon from '../../public/icons/TwitterIcon.svg';
import DiscordIcon from '../../public/icons/DiscordIcon.svg';
import ToTopButton from './ToTopButton';

export default function Footer() {
  return (
    <footer className='bg-primary pt-12 px-20 pb-5 tablet:px-[124px] tablet:pt-24'>
      <div className='pb-5 tablet:pb-8 border-b border-white mb-20 max-w-[450px] tablet:mb-16'>
        <Image src={Logo} alt='logo'></Image>
      </div>
      <div className='tablet:flex tablet:justify-between border-b border-white mb-5'>
        <div className='mb-10 tablet:max-w-[340px]'>
          <p className='text-16 font-bold text-grayshOrange [&strong]:text-teal mb-5 tablet:mb-8'>
            Institucional
          </p>
          <p className='text-white'>
            Fundado em 2016, o Dica de Aposta é um site focado em apostas
            esportivas, com avaliações de sites, palpites, conteúdos e um Canal
            VIP.
          </p>
        </div>
        <div className='mb-10 tablet:max-w-[340px]'>
          <p className='text-16 font-bold text-grayshOrange  mb-5 tablet:mb-8'>Contato</p>
          <div className='flex items-center gap-7 mb-8'>
            <ZapIcon />
            <span className='text-white'>(41) 9 8816.9242</span>
          </div>
          <div className='flex items-center gap-7 mb-8'>
            <MailIcon />
            <span className='text-white'>contato@dicadeaposta.com</span>
          </div>
        </div>
        <div className='tablet:max-w-[340px]'>
          <p className='text-16 font-bold text-grayshOrange  mb-6'>Siga-nos</p>
          <div className='flex gap-7 pb-10 tablet:mb-8'>
            <TelegramIcon className="tablet:scale-[1.3]"></TelegramIcon>
            <TwitterIcon className="tablet:scale-[1.3]"></TwitterIcon>
            <DiscordIcon className="tablet:scale-[1.3]"></DiscordIcon>
            <ToTopButton ></ToTopButton>
          </div>
        </div>
      </div>

      <p className='text-10 text-white'>
        Desenvolvido por <strong>Apiki Wordpress</strong> | Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
