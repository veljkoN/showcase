import { Download, Features, SectionWraper } from "./components";
import assets from "./assets";
import styles from "./styles/Global";
function App() {
  return (
    <>
      <SectionWraper
        title="Your own store of Nifty NFTs .Start Selling and Gtowing"
        description="Buy, store, collect NFTS, Exchange and earn crypto. Join 25+ million people using ProNef Marketplace"
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWraper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of Pro/nef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWraper
        title="Deployment"
        description="Pronef is built using Expo which runs natively on all users devices. You can easyly get your app into people hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWraper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one show the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner-02"
      />
      <Download />
      <div className="px-4 py-2 justify-center items-center bg-primary flex-column text-center banner-04">
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by <span className="bold">JavaScript Mastery</span>
        </p>
      </div>
    </>
  );
}

export default App;
