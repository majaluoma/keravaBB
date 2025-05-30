import BlockView from '../components/customUi/BlockView';
import TextContent from '../features/textContent/TextContent';

export default function Opas() {
  return (
    <BlockView variant="white">
      <TextContent markdownFile={'/siteTexts/opas.md'}></TextContent>
    </BlockView>
  );
}
