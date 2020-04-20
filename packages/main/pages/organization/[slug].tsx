import Organization from '../../components/organization';
import { NextPage } from "next"

type Props = {
  query: any
}

const OrganizationPage: NextPage<Props> = ({query}) => {
  return (<div>
    <Organization organizationSlug={query.slug} />
  </div>)
}

OrganizationPage.getInitialProps = async ({query}) => {
  return { query }
}

export default OrganizationPage