import AwsuiDarkMode from 'awsui-dark-mode';
import { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from '../../components/home';
import Packages from '../../components/packages';
import Publications from '../../components/publications';
import Quotes from '../../components/quotes';
import SpriteSheet2Gif from '../../components/spritesheet2gif';

const queryClient: QueryClient = new QueryClient();

export default function App(): ReactElement {
  return (
    <AwsuiDarkMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Switch>
            <Route
              component={BecomeTheJuniorDeveloperThatCompaniesWantToHire}
              path="/become-the-junior-developer-that-companies-want-to-hire/"
            />
            <Route component={Packages} path="/packages" />
            <Route component={Publications} path="/publications" />
            <Route component={Quotes} path="/quotes" />
            <Route component={SpriteSheet2Gif} path="/spritesheet2gif" />
            <Route component={Home} />
          </Switch>
        </QueryClientProvider>
      </BrowserRouter>
    </AwsuiDarkMode>
  );
}

function BecomeTheJuniorDeveloperThatCompaniesWantToHire(): null {
  window.location.href =
    'https://charles-stover.medium.com/become-the-junior-developer-that-companies-want-to-hire-c539f4c236d8';
  return null;
}
