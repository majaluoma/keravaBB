import BlockView from '../components/customUi/BlockView';
import TextContent from '../features/textContent/TextContent';

export default function Home() {
  return (
    <BlockView variant="card" className='mx-10'>
          <div className="max-w-screen p-1">
    
          <TextContent markdownFile={`/siteTexts/home.md?cb=${Date.now()}`}></TextContent>
          </div>
        </BlockView>
  );
}
