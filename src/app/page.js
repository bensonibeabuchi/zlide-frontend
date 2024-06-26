import Landing from "./landing/Landing";
import Provider from '@/redux/provider.jsx';
import { Setup } from "@/components/utils";


export default function Home() {
  return (
    <main>
        <Provider>
          <Setup/>
            <Landing/>
        </Provider>
    </main>
  );
}
