import az204 from '@/assets/images/azure-developer-associate-600x600.png';
import az400 from '@/assets/images/azure-devops-engineer-expert-600x600.png';
import dp420 from '@/assets/images/azure-cosmosdb-developer.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Certificate() {
  const certs = [
    {
      name: 'Azure Developer Certificate',
      imageUrl: az204,
      url: 'https://learn.microsoft.com/api/credentials/share/en-us/joaquimcosta/33F48BE03911C07C?sharingId=117A2EE4C23A5BEA',
    },
    {
      name: 'Azure DevOps Engineer Expert',
      imageUrl: az400,
      url: 'https://learn.microsoft.com/api/credentials/share/en-us/joaquimcosta/738E6B3882D9F840?sharingId=117A2EE4C23A5BEA',
    },
    {
      name: 'Azure Cosmos Database Developer Specialty',
      imageUrl: dp420,
      url: 'https://learn.microsoft.com/api/credentials/share/en-us/joaquimcosta/92700F7B91E649AA?sharingId=117A2EE4C23A5BEA',
    },
  ];
  const renderedCerts = certs.map((item) => {
    return (
      <Link href={item.url} key={item.name}>
        <div className='m-4 max-w-48'>
          <Image className='max-w-full' src={item.imageUrl} alt={item.name} />
        </div>
      </Link>
    );
  });
  return <div className='flex justify-center gap-2'>{renderedCerts}</div>;
}
