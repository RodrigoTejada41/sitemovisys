export type Client = {
  name: string;
  logo: string;
  alt: string;
  logoStatus: 'official' | 'placeholder';
  imageClassName?: string;
};

export const clients: Client[] = [
  {
    name: 'MUGUI',
    logo: '/images/clients/mugui.jpeg',
    alt: 'Logo da MUGUI',
    logoStatus: 'official',
    imageClassName: '!w-20 rounded-sm',
  },
  {
    name: 'Sorveteria Malou',
    logo: '/images/clients/sorveteria-malou.png',
    alt: 'Logo da Sorveteria Malou',
    logoStatus: 'official',
    imageClassName: '!w-20 rounded-full',
  },
  {
    name: 'Clube Jeca',
    logo: '/images/clients/clube-jeca-clube.png',
    alt: 'Logo do Clube Jeca',
    logoStatus: 'official',
    imageClassName: '!w-20 rounded-full',
  },
  {
    name: 'Clube da PICANHA',
    logo: '/images/clients/clube-da-picanha.png',
    alt: 'Logo do Clube da PICANHA',
    logoStatus: 'official',
    imageClassName: 'scale-[1.16] [clip-path:inset(9%_15%_14%_15%_round_3px)]',
  },
  {
    name: 'Evolução Biológica',
    logo: '/images/clients/evolucao-biologica.png',
    alt: 'Logo da Evolução Biológica Controle de Pragas',
    logoStatus: 'official',
    imageClassName: 'brightness-[1.12] contrast-[1.35] saturate-[1.1]',
  },
  {
    name: 'Top Mármore',
    logo: '/images/clients/top-marmore.png',
    alt: 'Logo da Top Mármore',
    logoStatus: 'official',
    imageClassName: 'scale-[1.12] [clip-path:inset(20%_0_25%_0)]',
  },
  {
    name: 'Seguradora Mondial',
    logo: '/images/clients/seguradora-mondial.svg',
    alt: 'Identificação temporária da Seguradora Mondial',
    logoStatus: 'placeholder',
  },
  {
    name: 'XD Software',
    logo: '/images/clients/xd-software.svg',
    alt: 'Identificação temporária da XD Software',
    logoStatus: 'placeholder',
  },
];
