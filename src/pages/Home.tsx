import BlockView from '../components/customUi/BlockView';
import TextContent from '../features/textContent/TextContent';

export default function Home() {
  return (
    <BlockView variant="white">
      <TextContent markdownFile={'/siteTexts/home.md'}></TextContent>
    </BlockView>
  );
}
