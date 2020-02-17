import { CURRENT_USER } from '../../queries/user';
import { Image } from 'cloudinary-react';
import { useQuery } from '@apollo/react-hooks';

function MyAvatar(props) {
  const user = useQuery(CURRENT_USER);

  return (
    <Image className={props.className} secure default_image="placeholder-4.svg" publicId={user.data.me && user.data.me.avatar ? props.publicId || user.data.me.avatar.publicId : 'placeholder'} width={props.size} crop="scale" format="png" />
  )
}

export default MyAvatar