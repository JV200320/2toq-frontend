import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';

const withAuthAdmin = (Component) => {
  const Auth = (props) => {
    const router = useRouter();
    const loggedUser = useSelector((state) => state.auth.loggedUser);
    let apiData; 
    
    if(Cookie.get('@api-data')){
      try {
        apiData = JSON.parse(Cookie.get('@api-data'));
      } catch (error) {
        router.push('/login')
      }
    }else{
      router.push('/login')
    }
    
    if(!loggedUser || 
      loggedUser.profile !== 'kitchen' ||
      !apiData ||
      !apiData['access-token'] ||
      apiData['access-token'] === '') {
      router.push('/login')
    }


    return <Component {...props} />;
  }
  
  if(Component.getServerSideProps) {
    Auth.getServerSideProps = Component.getServerSideProps;
  }

  return Auth;
}

export default withAuthAdmin;