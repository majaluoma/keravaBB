import BlockView from '../components/customUi/BlockView';
import TextContent from '../features/textContent/TextContent';

export default function Home() {
  return (
    <BlockView variant="card">
      <TextContent markdownFile={'/siteTexts/home.md'}></TextContent>
    </BlockView>
  );
}
