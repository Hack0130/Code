import { Routes, Route } from 'react-router-dom'
import PlaceholderPage from '../components/common/PlaceholderPage'
import Notifications from '../pages/Buyers/Aacount/Notifications'
import EditShippingAddress from '../pages/Buyers/Aacount/EditShippingAddress'

// Buyers components
import LandingPage from '../pages/Buyers/LandingPage'
import WomensFashionSubCategory from '../pages/Buyers/Category/WomensFashion/WomansFashionSubCategory'
import MenFashionSubCategories from '../pages/Buyers/Category/Mens-Fashion/MenFashionSubCategories'
import JewelleryAndWatchesSubCategory from '../pages/Buyers/Category/JewelleryAndWatches/JewelleryAndWatchesSubCategory'
import OutdoorsFunAndSportsSubCategory from '../pages/Buyers/Category/OutdoorsFunAndSports/OutdoorsFunAndSportsSubCategory'
import Shipping from '../pages/Buyers/Product-Details/Shipping-Component/Shipping'
import BagsAndShoes from '../pages/Buyers/Category/BagsAndShoes/BagsAndShoes'
import CartPage from '../pages/Buyers/Cart/CartPage'
import LoginPage from '../pages/Buyers/Login/LoginPage'
import SignupPage from '../pages/Buyers/Signup/SignupPage'
import CustomerService from '../pages/Buyers/Aacount/CustomerService'
import PaymentSuccessful from '../pages/Buyers/PaymentSuccessful'
import Checkout from '../pages/Buyers/Checkout/Checkout'
import MyAccount from '../components/Account/MyAccount'
import PendingReviews from '../pages/Buyers/Aacount/PendingReviews'
import ProductDetails from '../pages/Buyers/Product-Details/ProductDetails'
import ProductCatalogue from '../pages/Buyers/Product-Catalogue/ProductCatalogue'
import Electronics from '../pages/Buyers/Category/Electronics'
import ToolsAndHomeImprovement from '../pages/Buyers/Category/ToolsAndHomeImprovement'
import PhonesAndAccessoriesSubCategory from '../pages/Buyers/Category/PhonesAndAccessories/PhonesAndAccessoriesSubCategory'
import ComputerOfficeSubCategory from '../pages/Buyers/Category/ComputerOffice/ComputerOfficeSubCategory'
import HomePetAndAppliances from '../pages/Buyers/Category/HomePetAndAppliances/HomePetAndAppliances'
import AutomotiveSubCategory from '../pages/Buyers/Category/Automotive/AutomotiveSubCategory'
import HelpCenter from '../components/Footer/Help-center/HelpCenter'
import ContactUs from '../components/Footer/Contact-Us/ContactUs.jsx'
import AboutUs from '../components/Footer/About-Us/AboutUs'
import FlashSales from '../components/Footer/Flash-Sales/FlashSales'
import SiteMap from '../components/Footer/Site-Map/SiteMap'
import FAQComponent from '../components/Footer/FAQs/FAQComponent'
import ReturnsHelp from '../components/Footer/Returns/ReturnsHelp'
import PoliciesComponent from '../components/Footer/Policies/PoliciesComponent'
import CareersComponent from '../components/Footer/Careers/CareersComponent'
import DigitalMedia from '../pages/Buyers/Category/DigitalMedia/DigitalMediaSubCategory'
import ToysKidsAndBabiesSubCategory from '../pages/Buyers/Category/ToysKidsAndBabies/ToysKidsAndBabiesSubCategory'
import CategoryPage from '../pages/Buyers/Category/category/Category'
import AacountLayout from '../components/Account/AacountLayout'
import Orders from '../pages/Buyers/Aacount/Orders/Orders'
import Payment from '../pages/Buyers/Aacount/Payments/Payment'
import AddGiftCardorVoucher from '../pages/Buyers/Aacount/Payments/AddGiftCardorVoucher'
import Transactions from '../pages/Buyers/Aacount/Payments/Transactions'
import AccountManagement from '../pages/Buyers/Aacount/AccountManagement/AccountManagement'
import WishList from '../pages/Buyers/Aacount/WishList'
import RecentlyViewed from '../pages/Buyers/Aacount/RecentlyViewed'
import Category from '../pages/Buyers/Category/category/Category.jsx'
import CamerasView from '../pages/Buyers/Category/Electronics/Cameras/CamerasView'

// Sellers component
import Homepage from '../pages/Sellers/Home/Homepage'
import ListOfProducts from '../pages/Sellers/ProductCatalogue/ListOfProducts'
import ActivityFeed from '../pages/Sellers/Analytics/ActivityFeed'
import UploadProduct from '../pages/Sellers/ProductCatalogue/UploadProduct'
import OrderList from '../pages/Sellers/OrderManagement/OrderList'
import ReturnsAndRefunds from '../pages/Sellers/OrderManagement/Returns-And-Refunds/ReturnsAndRefunds'
import Disputes from '../pages/Sellers/OrderManagement/Disputes'
import Overview from '../pages/Sellers/Analytics/Overview/Overview'
import Payments from '../pages/Sellers/Analytics/Payments/Payments'
import FeedDetail from '../pages/Sellers/Analytics/FeedDetail'
import ProductDetail from '../pages/Sellers/ProductCatalogue/ProductDetail'
import Signup from '../pages/Sellers/Signup/Signup'
import Login from '../pages/Sellers/Login/Login'
import RatingsAndReviews from '../pages/Sellers/Analytics/R&R/Ratings'
import Body from '../pages/Sellers/NotificationsSettings/components/Body'
import HelpPage from '../pages/Sellers/HelpPage'
import CompanyService from '../pages/Sellers/CompanyService'
import LandingPageforSellers from '../pages/Sellers/LandingPageforSellers'
import SellerFooter from '../pages/Sellers/Footer/SellerFooter'
import ProductSafety from '../pages/Sellers/Footer/ProductSafety'
import SonnyApp from '../pages/Sellers/Footer/SonnyApp'
import CompanyInfo from '../pages/Sellers/CompanyInfo/CompanyInfo'
import OnlineFulfillment from '../pages/Sellers/OnlineFulfillment/OnlineFulfillment'
import PaymentServices from '../pages/Sellers/PaymentServices/PaymentServices'
import TwoStepVerification from '../pages/Sellers/2-StepVerification/TwoStepVerification'
import Agreements from '../pages/Sellers/Agreements/Agreements'

// Category Views
import AutoPartsview from '../pages/Buyers/Category/Automotive/UpperBody/Pageviews/AutoPartsview'
import CarCareview from '../pages/Buyers/Category/Automotive/UpperBody/Pageviews/CarCareview'
import ElectronicsAndGadgetsview from '../pages/Buyers/Category/Automotive/UpperBody/Pageviews/ElectronicsAndGadgetsview'
import ExteriorAccessoriesview from '../pages/Buyers/Category/Automotive/UpperBody/Pageviews/ExteriorAccessoriesview'
import FluidAndChemicalsview from '../pages/Buyers/Category/Automotive/UpperBody/Pageviews/FluidAndChemicalsview'
import InteriorAccessoriesview from '../pages/Buyers/Category/Automotive/UpperBody/Pageviews/InteriorAccessoriesview'
import ToolsAndEquipmentview from '../pages/Buyers/Category/Automotive/UpperBody/Pageviews/ToolsAndEquipmentview'
import WheelsAndTiresview from '../pages/Buyers/Category/Automotive/UpperBody/Pageviews/WheelsAndTiresview'
import ComputerAccessoriesView from '../pages/Buyers/Category/ComputerOffice/UpperBody/PageViews/ComputerAccessoriesView'
import DesktopView from '../pages/Buyers/Category/ComputerOffice/UpperBody/PageViews/DestopsView'
import LaptopsView from '../pages/Buyers/Category/ComputerOffice/UpperBody/PageViews/LaptopsView'
import NetworkingView from '../pages/Buyers/Category/ComputerOffice/UpperBody/PageViews/NetworkingView'
import OfficeSecView from '../pages/Buyers/Category/ComputerOffice/UpperBody/PageViews/OfficeSec'
import OfficeSuppliesView from '../pages/Buyers/Category/ComputerOffice/UpperBody/PageViews/OfficeSuppliesView'
import PrintersView from '../pages/Buyers/Category/ComputerOffice/UpperBody/PageViews/PrintersView'
import SmartLocksView from '../pages/Buyers/Category/ComputerOffice/UpperBody/PageViews/SmartLocksView'
import StorageView from '../pages/Buyers/Category/ComputerOffice/UpperBody/PageViews/StorageView'
import DigitalAudioPlayersview from '../pages/Buyers/Category/DigitalMedia/UpperBody/Pageviews/DigitalAudioPlayersview'
import DigitalCameraview from '../pages/Buyers/Category/DigitalMedia/UpperBody/Pageviews/DigitalCameraview'
import EReadersAccessoriesview from '../pages/Buyers/Category/DigitalMedia/UpperBody/Pageviews/EReadersAccessoriesview'
import EReadersview from '../pages/Buyers/Category/DigitalMedia/UpperBody/Pageviews/EReadersview'
import StreamingDevicesview from '../pages/Buyers/Category/DigitalMedia/UpperBody/Pageviews/StreamingDevicesview'
import Braceletsview from '../pages/Buyers/Category/JewelleryAndWatches/UpperBody/Pageviews/Braceletsview'
import Earringsview from '../pages/Buyers/Category/JewelleryAndWatches/UpperBody/Pageviews/Earringsview'
import Necklacesview from '../pages/Buyers/Category/JewelleryAndWatches/UpperBody/Pageviews/Necklacesview'
import PocketWatchesview from '../pages/Buyers/Category/JewelleryAndWatches/UpperBody/Pageviews/PocketWatchesview'
import Ringsview from '../pages/Buyers/Category/JewelleryAndWatches/UpperBody/Pageviews/Ringsview'
import Setsview from '../pages/Buyers/Category/JewelleryAndWatches/UpperBody/Pageviews/Setsview'
import SmartWatchesview from '../pages/Buyers/Category/JewelleryAndWatches/UpperBody/Pageviews/SmartWatchesview'
import Trendingview from '../pages/Buyers/Category/JewelleryAndWatches/UpperBody/Pageviews/Trendingview'
import Wristwatchesview from '../pages/Buyers/Category/JewelleryAndWatches/UpperBody/Pageviews/WristWatchesview'
import BluetoothSpeakersview from '../pages/Buyers/Category/PhonesAndAccessories/UpperBody/Pageviews/BluetoothSpeakersview'
import ChargersAndCablesview from '../pages/Buyers/Category/PhonesAndAccessories/UpperBody/Pageviews/ChargersAndCablesview'
import Earphonesview from '../pages/Buyers/Category/PhonesAndAccessories/UpperBody/Pageviews/Earphonesview'
import Phonecasesview from '../pages/Buyers/Category/PhonesAndAccessories/UpperBody/Pageviews/Phonecasesview'
import SmartPhonesview from '../pages/Buyers/Category/PhonesAndAccessories/UpperBody/Pageviews/SmartPhonesview'
import PASmartWatchesview from '../pages/Buyers/Category/PhonesAndAccessories/UpperBody/Pageviews/SmartWatchesview'
import Activewearview from '../pages/Buyers/Category/WomensFashion/UpperBody/Pageviews/Activewearview'
import Bottomsview from '../pages/Buyers/Category/WomensFashion/UpperBody/Pageviews/Bottomsview'
import Dressesview from '../pages/Buyers/Category/WomensFashion/UpperBody/Pageviews/Dressesview'
import Jumpsuitsview from '../pages/Buyers/Category/WomensFashion/UpperBody/Pageviews/Jumpsuitsview'
import Swimwearview from '../pages/Buyers/Category/WomensFashion/UpperBody/Pageviews/Swimwearview'
import Topsview from '../pages/Buyers/Category/WomensFashion/UpperBody/Pageviews/Topsview'
import ActionFiguresAndPlaySetsview from '../pages/Buyers/Category/ToysKidsAndBabies/UpperBody/Pageviews/ActionFiguresAndPlaySetsview'
import AdventureSpotview from '../pages/Buyers/Category/ToysKidsAndBabies/UpperBody/Pageviews/AdventureSpotview'
import CraftyOasisview from '../pages/Buyers/Category/ToysKidsAndBabies/UpperBody/Pageviews/CraftyOasisview'
import CreateAndPlayview from '../pages/Buyers/Category/ToysKidsAndBabies/UpperBody/Pageviews/CreateAndPlayview'
import CuddlyCornerview from '../pages/Buyers/Category/ToysKidsAndBabies/UpperBody/Pageviews/CuddlyCornerview'
import DollCornerview from '../pages/Buyers/Category/ToysKidsAndBabies/UpperBody/Pageviews/DollCornerview'
import FantasyFashionview from '../pages/Buyers/Category/ToysKidsAndBabies/UpperBody/Pageviews/FantasyFashionview'
import FunDiscoveriesview from '../pages/Buyers/Category/ToysKidsAndBabies/UpperBody/Pageviews/FunDiscoveriesview'
import PuzzleParadiseview from '../pages/Buyers/Category/ToysKidsAndBabies/UpperBody/Pageviews/PuzzleParadiseview'
import RollAndExploreview from '../pages/Buyers/Category/ToysKidsAndBabies/UpperBody/Pageviews/RollAndExploreview'
import SmartLearningview from '../pages/Buyers/Category/ToysKidsAndBabies/UpperBody/Pageviews/SmartLearningview'
import StemGalaxyview from '../pages/Buyers/Category/ToysKidsAndBabies/UpperBody/Pageviews/StemGalaxyview'
import SupriseHavenview from '../pages/Buyers/Category/ToysKidsAndBabies/UpperBody/Pageviews/SupriseHavenview'
import ThrillCornerview from '../pages/Buyers/Category/ToysKidsAndBabies/UpperBody/Pageviews/ThrillCornerview'

// Placeholder pages for routes that need implementation
const PrivacyNotice = () => <PlaceholderPage title="Privacy Notice" />
const ConditionsOfUse = () => <PlaceholderPage title="Conditions of Use" />
const Legal = () => <PlaceholderPage title="Legal Information" />
const OrderDetails = () => <PlaceholderPage title="Order Details" />
const MensBagsBackpacks = () => (
  <PlaceholderPage title="Men's Bags & Backpacks" />
)

// Men's Bags Placeholders
const BeltAndFannyPacks = () => <PlaceholderPage title="Belt & Fanny Packs" />
const DuffelBags = () => <PlaceholderPage title="Duffel Bags" />
const LaptopBags = () => <PlaceholderPage title="Laptop Bags" />
const Wallets = () => <PlaceholderPage title="Wallets" />

// Men's Shoes Placeholders
const Boots = () => <PlaceholderPage title="Boots" />
const CasualShoes = () => <PlaceholderPage title="Casual Shoes" />
const DressShoes = () => <PlaceholderPage title="Dress Shoes" />
const Loafers = () => <PlaceholderPage title="Loafers" />
const MensSlippers = () => <PlaceholderPage title="Men's Slippers" />
const SportsShoesAndSneakers = () => (
  <PlaceholderPage title="Sports Shoes & Sneakers" />
)

// Women's Bags Placeholders
const WomensBackpacks = () => <PlaceholderPage title="Women's Backpacks" />
const BeltBagsAndFannyPacks = () => (
  <PlaceholderPage title="Belt Bags & Fanny Packs" />
)
const ClutchesAndEveningBags = () => (
  <PlaceholderPage title="Clutches & Evening Bags" />
)
const CrossbodyBags = () => <PlaceholderPage title="Crossbody Bags" />
const WomensDuffelBags = () => <PlaceholderPage title="Women's Duffel Bags" />
const SatchelBags = () => <PlaceholderPage title="Satchel Bags" />
const ToteBags = () => <PlaceholderPage title="Tote Bags" />

// Women's Shoes Placeholders
const BootsAndAnkleBoots = () => <PlaceholderPage title="Boots & Ankle Boots" />
const DesignerShoes = () => <PlaceholderPage title="Designer Shoes" />
const FlatsAndLoafers = () => <PlaceholderPage title="Flats & Loafers" />
const HeelsAndPumps = () => <PlaceholderPage title="Heels & Pumps" />
const Sandals = () => <PlaceholderPage title="Sandals" />
const WomensSlippers = () => <PlaceholderPage title="Women's Slippers" />
const WomensSportsShoesAndSneakers = () => (
  <PlaceholderPage title="Women's Sports Shoes & Sneakers" />
)
const WeddingAndEvenings = () => (
  <PlaceholderPage title="Wedding & Evening Shoes" />
)
const Wedges = () => <PlaceholderPage title="Wedges" />

// Below commented secion will be replace by above script block
// review
// Final check improvisation:
// import Notifications from '../pages/Buyers/Aacount/Notifications'
// import OrderDetails from '../pages/Buyers/Aacount/Orders/OrderDetails'
// import MensBagsBackpacks from '../pages/Buyers/Category/BagsAndShoes/MensBags/Backpacks'
// import CamerasView from '../pages/Buyers/Category/Electronics/CamerasView'
// import PrivacyNotice from '../components/Footer/Policies/PrivacyNotice'
// import ConditionsOfUse from '../components/Footer/Policies/ConditionsOfUse'
// import Legal from '../components/Footer/Policies/Legal'

// layout
import Layout from '../Layout'

import SingleJob from '../pages/careers/SingleJob.jsx'

const RouterConfig = () => {
  return (
    <Routes>
      {/* Buyers Routes */}

      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/toolsAndHomeImprovement"
          element={<ToolsAndHomeImprovement />}
        />
        <Route path="/electronics" element={<Electronics />} />
        <Route
          path="/outdoorsAndSports"
          element={<OutdoorsFunAndSportsSubCategory />}
        />
        <Route path="/womensfashion" element={<WomensFashionSubCategory />} />
        <Route
          path="/homePetAndAppliances"
          element={<HomePetAndAppliances />}
        />
        <Route
          path="/jewelryAndWatches"
          element={<JewelleryAndWatchesSubCategory />}
        />
        <Route path="/mensFashion" element={<MenFashionSubCategories />} />
        <Route
          path="/toyskidsandbabies"
          element={<ToysKidsAndBabiesSubCategory />}
        />
        <Route path="/automotive" element={<AutomotiveSubCategory />} />
        <Route
          path="/phonesAndAccessories"
          element={<PhonesAndAccessoriesSubCategory />}
        />
        <Route
          path="/computersAndOffice"
          element={<ComputerOfficeSubCategory />}
        />
        <Route path="/bagsandshoes" element={<BagsAndShoes />} />
        <Route
          path="/homePetsAndAppliances"
          element={<HomePetAndAppliances />}
        />
        <Route path="/digitalMedia" element={<DigitalMedia />} />
        <Route path="/productdetails" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/electronics/cameras" element={<CamerasView />} />

        {/* Category Detail Views */}
        {/* Automotive */}
        <Route path="/autopartsview" element={<AutoPartsview />} />
        <Route path="/carcareview" element={<CarCareview />} />
        <Route
          path="/electronicsandgadgets"
          element={<ElectronicsAndGadgetsview />}
        />
        <Route
          path="/exterioraccessoriesview"
          element={<ExteriorAccessoriesview />}
        />
        <Route
          path="/fluidandchemicalsrview"
          element={<FluidAndChemicalsview />}
        />
        <Route
          path="/interioraccessoriesview"
          element={<InteriorAccessoriesview />}
        />
        <Route
          path="/toolsandequipmentview"
          element={<ToolsAndEquipmentview />}
        />
        <Route path="/wheelsandtiresview" element={<WheelsAndTiresview />} />

        {/* Computer Office */}
        <Route
          path="/computeraccessories"
          element={<ComputerAccessoriesView />}
        />
        <Route path="/desktopview" element={<DesktopView />} />
        <Route path="/laptopsview" element={<LaptopsView />} />
        <Route path="/networkingview" element={<NetworkingView />} />
        <Route path="/officesecview" element={<OfficeSecView />} />
        <Route path="/officesuppliesview" element={<OfficeSuppliesView />} />
        <Route path="/printersview" element={<PrintersView />} />
        <Route path="/smartlocksview" element={<SmartLocksView />} />
        <Route path="/storageview" element={<StorageView />} />

        {/* Digital Media */}
        <Route
          path="/digitalaudioplayersview"
          element={<DigitalAudioPlayersview />}
        />
        <Route path="/digitalcameraview" element={<DigitalCameraview />} />
        <Route
          path="/ereadersaccessoriesview"
          element={<EReadersAccessoriesview />}
        />
        <Route path="/ereadersview" element={<EReadersview />} />
        <Route
          path="/streamingdevicesview"
          element={<StreamingDevicesview />}
        />

        {/* Jewelry And Watches */}
        <Route path="/braceletsview" element={<Braceletsview />} />
        <Route path="/earringsview" element={<Earringsview />} />
        <Route path="/necklacesview" element={<Necklacesview />} />
        <Route path="/pocketwatchesview" element={<PocketWatchesview />} />
        <Route path="/ringsrview" element={<Ringsview />} />
        <Route path="/setsview" element={<Setsview />} />
        <Route path="/smartwatchesview" element={<SmartWatchesview />} />
        <Route path="/trendingview" element={<Trendingview />} />
        <Route path="/wristwatches" element={<Wristwatchesview />} />

        {/* Phones And Accessories */}
        <Route
          path="/bluetoothspeakerview"
          element={<BluetoothSpeakersview />}
        />
        <Route
          path="/chargersandcablesview"
          element={<ChargersAndCablesview />}
        />
        <Route path="/earphonesview" element={<Earphonesview />} />
        <Route path="/phonecaseview" element={<Phonecasesview />} />
        <Route path="/smartphonesview" element={<SmartPhonesview />} />
        <Route path="/pasmartwatchesview" element={<PASmartWatchesview />} />

        {/* Women's Fashion */}
        <Route path="/activewearview" element={<Activewearview />} />
        <Route path="/bottomsview" element={<Bottomsview />} />
        <Route path="/dressesview" element={<Dressesview />} />
        <Route path="/jumpsuitsview" element={<Jumpsuitsview />} />
        <Route path="/swimwearview" element={<Swimwearview />} />
        <Route path="/topsview" element={<Topsview />} />

        {/* Toys Kids And Babies */}
        <Route
          path="/actionfiguresandplaysetsview"
          element={<ActionFiguresAndPlaySetsview />}
        />
        <Route path="/adventurespotview" element={<AdventureSpotview />} />
        <Route path="/craftyoasisview" element={<CraftyOasisview />} />
        <Route path="/createandplayview" element={<CreateAndPlayview />} />
        <Route path="/cuddlycornerview" element={<CuddlyCornerview />} />
        <Route path="/dollcornerview" element={<DollCornerview />} />
        <Route path="/fantasyfashionview" element={<FantasyFashionview />} />
        <Route path="/fundiscoveriesview" element={<FunDiscoveriesview />} />
        <Route path="/puzzleparadiseview" element={<PuzzleParadiseview />} />
        <Route path="/rollandexploreview" element={<RollAndExploreview />} />
        <Route path="/smartlearningview" element={<SmartLearningview />} />
        <Route path="/stemgalaxyview" element={<StemGalaxyview />} />
        <Route path="/suprisehavenview" element={<SupriseHavenview />} />
        <Route path="/thrillcornerview" element={<ThrillCornerview />} />

        {/* Account route */}
        <Route path="/account" element={<AacountLayout />}>
          <Route path="" element={<MyAccount />} />
          <Route path="orders" element={<Orders />} />
          <Route path="pendingreviews" element={<PendingReviews />} />
          <Route path="wishList" element={<WishList />} />
          <Route path="recentlyViewed" element={<RecentlyViewed />} />
          <Route path="customer-service" element={<CustomerService />} />
          <Route
            path="addgiftcard-voucher"
            element={<AddGiftCardorVoucher />}
          />
          <Route path="transactions" element={<Transactions />} />
          <Route path="accountManagement" element={<AccountManagement />} />
          <Route path="editShippingAddress" element={<EditShippingAddress />} />
        </Route>

        <Route path="/payments" element={<Payment />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/app" element="#" />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/companyService" element={<CompanyService />} />
        <Route path="/careers" element={<CareersComponent />} />
        <Route
          path="/careers/singleJob/:position/:id"
          element={<SingleJob />}
        />

        <Route path="/paymentSuccess" element={<PaymentSuccessful />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/accountsettings" element={<AacountLayout />} />
        <Route path="/productcatalogue" element={<ProductCatalogue />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/practiceCategory" element={<CategoryPage />} />

        {/* Buyer's Footer */}
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/flash-sales" element={<FlashSales />} />
        <Route path="/sitemap" element={<SiteMap />} />
        <Route path="/faqs" element={<FAQComponent />} />
        <Route path="/returns-help" element={<ReturnsHelp />} />
        <Route path="/policies" element={<PoliciesComponent />} />

        {/* Placeholder Routes */}
        <Route path="/account/notifications" element={<Notifications />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route
          path="/bagsAndShoes/mensBags/backpacks"
          element={<MensBagsBackpacks />}
        />
        <Route path="/electronics/cameras" element={<CamerasView />} />
        <Route path="/privacy-notice" element={<PrivacyNotice />} />
        <Route path="/conditions-of-use" element={<ConditionsOfUse />} />
        <Route path="/legal" element={<Legal />} />

        {/* Men's Bags Routes */}
        <Route
          path="/bagsAndShoes/mensBags/beltAndFannyPacks"
          element={<BeltAndFannyPacks />}
        />
        <Route
          path="/bagsAndShoes/mensBags/duffelBags"
          element={<DuffelBags />}
        />
        <Route
          path="/bagsAndShoes/mensBags/laptopBags"
          element={<LaptopBags />}
        />
        <Route path="/bagsAndShoes/mensBags/wallets" element={<Wallets />} />

        {/* Men's Shoes Routes */}
        <Route path="/bagsAndShoes/mensShoes/boots" element={<Boots />} />
        <Route
          path="/bagsAndShoes/mensShoes/casualShoes"
          element={<CasualShoes />}
        />
        <Route
          path="/bagsAndShoes/mensShoes/dressShoes"
          element={<DressShoes />}
        />
        <Route path="/bagsAndShoes/mensShoes/loafers" element={<Loafers />} />
        <Route
          path="/bagsAndShoes/mensShoes/slippers"
          element={<MensSlippers />}
        />
        <Route
          path="/bagsAndShoes/mensShoes/sportsShoesAndSneakers"
          element={<SportsShoesAndSneakers />}
        />

        {/* Women's Bags Routes */}
        <Route
          path="/bagsAndShoes/womensBags/backpacks"
          element={<WomensBackpacks />}
        />
        <Route
          path="/bagsAndShoes/womensBags/beltBagsAndFannyPacks"
          element={<BeltBagsAndFannyPacks />}
        />
        <Route
          path="/bagsAndShoes/womensBags/clutchesAndEveningBags"
          element={<ClutchesAndEveningBags />}
        />
        <Route
          path="/bagsAndShoes/womensBags/crossbodyBags"
          element={<CrossbodyBags />}
        />
        <Route
          path="/bagsAndShoes/womensBags/duffelBags"
          element={<WomensDuffelBags />}
        />
        <Route
          path="/bagsAndShoes/womensBags/satchelBags"
          element={<SatchelBags />}
        />
        <Route
          path="/bagsAndShoes/womensBags/toteBags"
          element={<ToteBags />}
        />

        {/* Women's Shoes Routes */}
        <Route
          path="/bagsAndShoes/womensShoes/bootsAndAnkleBoots"
          element={<BootsAndAnkleBoots />}
        />
        <Route
          path="/bagsAndShoes/womensShoes/designerShoes"
          element={<DesignerShoes />}
        />
        <Route
          path="/bagsAndShoes/womensShoes/flatsAndLoafers"
          element={<FlatsAndLoafers />}
        />
        <Route
          path="/bagsAndShoes/womensShoes/heelsAndPumps"
          element={<HeelsAndPumps />}
        />
        <Route path="/bagsAndShoes/womensShoes/sandals" element={<Sandals />} />
        <Route
          path="/bagsAndShoes/womensShoes/slippers"
          element={<WomensSlippers />}
        />
        <Route
          path="/bagsAndShoes/womensShoes/sportsShoesAndSneakers"
          element={<WomensSportsShoesAndSneakers />}
        />
        <Route
          path="/bagsAndShoes/womensShoes/weddingAndEvenings"
          element={<WeddingAndEvenings />}
        />
        <Route path="/bagsAndShoes/womensShoes/wedges" element={<Wedges />} />
      </Route>

      <Route path="/product-safety" element={<ProductSafety />} />
      <Route path="/sonny-app" element={<SonnyApp />} />
      <Route path="/listOfproducts" element={<ListOfProducts />} />

      {/* Sellers Routes */}
      <Route path="/sellers" element={<LandingPageforSellers />}>
        <Route path="" element={<Homepage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="help" element={<HelpPage />} />
        <Route path="footer" element={<SellerFooter />} />

        {/* Analytics Routing */}
        <Route path="overview" element={<Overview />} />
        <Route path="payments" element={<Payments />} />
        <Route path="activityfeed/*" element={<ActivityFeed />} />
        <Route path="activityfeed/FeedDetail/:id" element={<FeedDetail />} />
        <Route path="ratingsandreviews" element={<RatingsAndReviews />} />

        {/* Product Catalogue Routing */}
        <Route path="uploadproduct" element={<UploadProduct />} />
        <Route path="product" element={<ProductDetail />} />
        <Route path="productlist" element={<ListOfProducts />} />

        {/* Order Management Routing */}
        <Route path="orderlist" element={<OrderList />} />
        <Route path="returnsandrefunds" element={<ReturnsAndRefunds />} />
        <Route path="disputes" element={<Disputes />} />

        {/* Notification Setting */}
        <Route path="notificationsettings" element={<Body />} />
        <Route path="onlinefulfillment" element={<OnlineFulfillment />} />
        <Route path="companyinfo" element={<CompanyInfo />} />
        <Route path="paymentservices" element={<PaymentServices />} />
        <Route path="twostepverification" element={<TwoStepVerification />} />
        <Route path="agreements" element={<Agreements />} />
        <Route path="helppage" element={<HelpPage />} />

        {/* Footer Routes */}
        <Route path="sellerfooter" element={<SellerFooter />} />
        <Route path="productsafety" element={<ProductSafety />} />
        <Route path="sonnyapp" element={<SonnyApp />} />
      </Route>
    </Routes>
  )
}

export default RouterConfig
