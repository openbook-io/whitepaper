import DocumentVersion from '../../components/document-version';
import { NextPage } from "next"

type Props = {
  query: any
}

const DocumentPage: NextPage<Props> = ({query}) => {
  return (<div>
    <DocumentVersion documentId={query.id} />
  </div>)
}

DocumentPage.getInitialProps = async ({query}) => {
  return { query }
}

export default DocumentPage