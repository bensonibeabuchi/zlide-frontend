import Provider from '@/redux/provider.jsx';
import { Setup } from "@/components/utils";


export default function Layout({ children }) {
  return (
      <div>
        <Provider>
          <Setup/>
            {children}
        </Provider>
        </div>
  );
}
