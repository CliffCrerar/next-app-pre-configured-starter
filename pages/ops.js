/**
 * Operations page
 */
import MatNextMarkdown from 'mat-next-markdown';
import IaaS from 'components/iaas';
export default (props) => {
  const { pageText } = props;
  return (
    <>
      <MatNextMarkdown>{pageText['p3-s1']}</MatNextMarkdown>
      <IaaS />
      <MatNextMarkdown>{pageText['p3-s2']}</MatNextMarkdown>
    </>
  )
};