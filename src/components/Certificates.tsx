import az204 from '@/assets/images/azure-developer-associate-600x600.png';
import az400 from '@/assets/images/azure-devops-engineer-expert-600x600.png';
import dp420 from '@/assets/images/azure-cosmosdb-developer.png';
import ai900 from '@/assets/images/azure-ai-fundamentals-600x600.png';
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
    {
      name: 'Azure AI Fundamentals',
      imageUrl: ai900,
      url: 'https://learn.microsoft.com/api/credentials/share/en-us/joaquimcosta/E0AAC211565828F5?sharingId=117A2EE4C23A5BEA',
    },
  ];
  return (
    <ul
      role='list'
      className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'
    >
      {certs.map((item) => (
        <li key={item.name} className='relative list-none'>
          <Link href={item.url}>
            <div className='group overflow-hidden'>
              <Image
                className='pointer-events-none aspect-auto object-cover group-hover:opacity-75'
                src={item.imageUrl}
                alt={item.name}
              />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
