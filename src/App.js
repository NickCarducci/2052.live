import React from "react";
import FraudMoney from "./FraudMoney";
import Cable from "./Dropwire";
import LeadingCities from "./LeadingCities";
import "./styles.css";
import TwitterTweetEmbed from "./TwitterTweetEmbed";
import UAParser from "ua-parser-js";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      browser: name,
      scrollTop: 0,
      iosNoPhoto: name.includes("Safari"),
      settleDropboxFree: true,
      iframed: true,
      marginTop: 200
      //marginTop: window.innerWidth * (window.innerHeight / window.innerWidth)
    };
    this.header = React.createRef();
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);

    //Check if the page is loaded in an iframe
    if (window.self !== window.top) {
      //Almost all browsers will deny Cross-Origin script access, so
      //we will use a try-catch block
      this.setState({ iframed: true });
      /* try {
          if (window.parent.location.hostname.indexOf("vaults.biz") === -1) {
          } else {
            //You are in an iframe but Same-Origin
          }
        } catch (ex) {
          //Congrats, you are in an iframe loaded in another site!
        }*/
    } else this.setState({ iframed: false });
  };
  componentWillUnmount = () => {
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    }
  };
  refresh = (first) => {
    const width = this.state.ios ? window.screen.availWidth : window.innerWidth;
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          marginTop: this.header.current.offsetHeight,
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  render() {
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    const { marginTop, iframed } = this.state;
    return (
      <div
        style={{
          backgroundColor: "rgb(218, 198, 90)",
          wordBreak: "break-word",
          width: "100%"
        }}
      >
        <div
          ref={this.header}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            top: "0px",
            position: "fixed",
            right: "0px",
            backgroundColor: "rgb(180,200,255)"
          }}
        >
          <a
            href="https://lightte.ch"
            style={{ color: "white", textDecoration: "none" }}
          >
            consumer-side, big regulation (science consensus only)
            <span
              role="img"
              aria-label="quad III - bottom left down arrow signifying consumer and labor equity protection from fractional reserve, public nor private"
            >
              ↙️
            </span>
          </a>
          <a
            href="https://lightte.ch"
            style={{ color: "white", textDecoration: "none" }}
          >
            lightte.ch
          </a>
        </div>
        <div
          style={{
            textAlign: "left",
            wordBreak: "break-word",
            transition: ".3s ease-in",
            margin: "10px",
            marginTop: marginTop,
            width: "calc(100% - 20px)",
            minWith: "300px",
            maxWidth: "600px"
          }}
        >
          <div
            style={{
              width: "100%"
            }}
          >
            <a
              style={{
                shapeOutside: "rect()",
                float: "right",
                width: "max-content",
                padding: "0px 10px",
                fontSize: "20px",
                fontFamily: "'Pacifico', sans-serif",
                color: "rgb(230,230,255)",
                backgroundColor: "rgb(32, 22, 11)"
              }}
              href="https://nationalsecuritycasino.com"
            >
              nationalsecuritycasino.com
            </a>
          </div>
          <br />
          Wealth in assets is not taxable as is income or wealth in profits
          beyond tools (third party beneficiary donee claimable invoices,
          expiring claims+false bid pools, implausible landlord use, kept down
          payments repo-cycle)
          <br />
          <br />
          trump is king debt/blackrock implausible landlord use 20x/person
          55+/millennial
          <h2>
            ErinBurnett: “Why are millions leaving their jobs,” that’s not true,
            and it might be $300k/yr debt and $70k/year new
            CurrencyComponentOfM1 (checking). Why wouldn't you work for your own
            copy with limited contracts of hours and IP-equitable as per design
            or discovery, never utility
            <br />
            the labor market is tight because we work 2x per person and 5x per
            worker since 1970 (doubles every 5 years)
            <br />
            <br />
            <h2>die ian of zip recruiter, you cannot take my copy</h2>I don't
            want to minimize childcare in the pandemic, as the women dropped
            more than men. yeah let's watch eachothers' kids and double your
            income. die
          </h2>
          2.4m quit 4.4m 11m open jobs doesn’t mean people are quitting overall.
          That is normal churn.
          <br />
          Stop freaking people out for ratings lady, excess needs to be fixed by
          cohort size, not age standardized alone.
          <br />
          <br />I studied market history and propoganda, we can amortize
          reversal of repo cycle kept down payments third party beneficiary
          donee claimable like expiring claims false bid pools or options on
          estimates, by cash:debt*income thru history. The federal reserve is
          lying about v1m1===v2m2==gdp. “It isn’t fair, it isn’t matched.”
          Velocity of m2 minus gdp divided by m2 minus CurrencyComponentOfM1
          times CurrencyComponentOfM1 is $6k/yr/person and gdp is $66k/yr/person
          <br />
          $300k/yr new debt, $70k/yr new CurrencyComponentOfM1
          <br />
          Income doesn’t account for gini homes nor bonds for purpose to be
          serfdom. Force majeure third party beneficiary donee claimable. Give
          us money would be a well paid actor for the bankers. Reverse, don’t
          cancel. Social workers want bonds to be paid off too, because people
          think hours are a public utility without operating costs…
          <br />
          <br />
          the trumpsters are advertising against fractional reserves in public
          and for communism in private
          <br />
          <h2>
            “He wants the party that you’ll give him. Not the one for you.”
            Levin on McConnell shadenfraude, manufacturing consent
          </h2>
          wall st Pharma cop vs wall st pharma cop (expiring claim false bid
          pools repo cycle kept down payments implausible landlord use third
          party beneficiary donee claimable)
          <Cable
            style={{
              width: "100%",
              maxWidth: "400px",
              height: "400px",
              maxHeight: "50vw"
            }}
            onError={handleScollImgError}
            src={
              this.state.iosNoPhoto
                ? ""
                : "https://drive.google.com/file/d/1Wt3RAESldbeuBOkTA1MwtfCMbdtyAzEl/preview"
            }
            float="left"
            title="https://constitutioncenter.org/interactive-constitution/preamble"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + 1]}
            scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
            scrollTop={this.state.scrollTop}
          />
          <h2>the tweet</h2>
          lightte.ch for the beneficiary of universe
          <br />
          <h2>
            save the supply chain: don't be racist&nbsp;
            <span style={{ fontSize: "14px" }}>teapharmacy.party</span>
          </h2>
          can't be pro-article4,&nbsp;
          <a href="https://humanharvest.info">provaxx</a>&nbsp;and antimandate
          <br />
          Top 3 issues, according to Charlie Kirk:
          <br />
          “Republicans need church and bile investigation of how virus ever
          enters the cell”
          <br />
          <br />
          “50% over the weekend,” Kraisman on shibu inu in lieu of whole
          1000000x total inequality, “don’t short things millennials think are
          funny” (inequality isn't productive as labor exclusively supply and
          demand without public nor private,&nbsp;
          <a href="https://laborequity.org">
            profits being net loss of individual labor savings
          </a>
          &nbsp;by normatively private communes; 8% workers are unionized,&nbsp;
          <a href="https://fred.stlouisfed.org/graph/?g=HRsT">
            workers being only 60% of the population always
          </a>
          , 90% corporates dead-weight profits y/y , debt growing $821 person a
          day mostly private (communist-boats, not the finite-producer
          regulation of credit-cycle sense) , rental-income being 20x/person
          55+/millennial)
          <a href="https://saverparty.xyz">
            <img
              alt=""
              style={{
                width: "100%",
                height: "auto"
              }}
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/v4azoofpqlteytr/Screen%20Shot%202021-10-25%20at%2011.30.54%20AM.png?dl=0"
              }
            />
          </a>
          <br />
          there is not a socialist that would support government gentrification.
          stop defaming abject truth for campaign fraud WABC/NewsMax
          <br />
          <br />
          $15 super chat is $28.50 with Apple fees
          <br />
          finite producers don't wanna be saved, profit is a net loss
          <br />
          <br />
          Marx spoke down first on the credit cycle with settled currency
          socialism is conservative, supply == demand, intermediate good
          favoritism is dead weight. in what world would socialists want to
          spend socially another laborers' means? Leave that to Bipartisan
          Communists and hypocritical Libertarians abound their getrification,
          public or private
          <div
            style={{
              overflowX: "auto",
              overflowY: "hidden",
              width: "100%",
              maxWidth: "600px",
              position: "relative"
            }}
          >
            <img
              style={{
                width: this.state.settleDropboxFree ? "100%" : "200%",
                height: "min-content",
                minHeight: this.state.settleDropboxFree ? "" : "800px",
                minWidth: this.state.settleDropboxFree ? "" : "1400px"
              }}
              alt="well, only cancel or bailout is forbid by prev demand & inappropriate
              margins (employee gentrification), respectively. If $170t is market
              cap total, $88t bond value, $2-6t cash currencyComponentOfM1 checking,
              (yet $4t/yr fed spend is normal, go figure), and gdp without bonds is
              1.1*currencyComponentOfM1/yr (before 3/2020), I don’t know how it is
              possible, else is moot or purposeful to collude with the loitering
              borrower as lender whom keep down payments upon repossession of the
              home… except to deprogram the credit cycle to amortize payments of the
              past to be cash:debt reduced! I’ll be pushing this for my 2025 Senate
              petitioning run under the ballot-slogan, Truncated Sales Tax. Need 10%
              of assembly for your party in NJ. Socialism is conservative; in what
              world is socialism sharing the means of labor with others? Marx spoke
              down on the credit cycle first with settled currency, and most support
              Occupy. 38% of nj won’t turn out, they either have no one representing
              this socialist conservative/degrowth caucus (Bottom left, Saver) or…
              idk they don’t have time or think it is worth it. I call them 26%
              detest & 12% eligible. Swing voters stay home! 🤍🐿🚨"
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/ei8otml06cacuw2/Screen%20Shot%202021-10-19%20at%2011.40.03%20AM.png?dl=0"
              }
            />
          </div>
          registering eligible voters into detest ={">"} plural-majority
          <br />
          <br />
          for&nbsp;<a href="https://saverparty.xyz">savers</a>&nbsp;not tax
          payer vacation and bizarre accrual fulfilled is supply == demand
          without free rider mutable tax price inelasticity and government
          gentrification bond laundering of public-park-deeds
          <iframe
            style={{ width: "100%" }}
            src="https://www.youtube.com/embed/m55ZAB47LHg"
            title="YouTube video player"
          ></iframe>
          Obama and Clyburn are like, mutually exclusive and diametrically
          opposed per glass Steagall and reverse debt:cash*income
          <br />
          <br />
          clarence thomas wants blind faith in the legal institutions, even
          though malfeasant in third-party beneficiary, foreseeable
          impossibility is intent, as is non-rollover pooling-duress abetted by
          said invoices that are theft of third party beneficiary or consent in
          contract and voluntary trade of a minimal viable product, otherwise is
          just duress beyond reasonable-product which finite producers cannot
          self-regulate, as an onset of target-margin-networks would invite, too
          <a href="https://www.census.gov/library/stories/2018/07/educational-attainment.html#:~:text=This,%20in%20part,%20reflects%20the%20age">
            1.6 educated persons
          </a>
          &nbsp;for every voter, invoices are theft, insurance withour rollover
          is competing with consumers for useless price inelasticity. you might
          think this means there are many uneduated that are voters, but that is
          only because we are equating these two by dividing them, but their
          other's basis is bound to another variable, the incidence of going to
          school and voting is shared by&nbsp;
          <a href="http://www.electproject.org/home/voter-turnout/demographics">
            prevalence of race
          </a>
          , is one from the other, or is order not necessary for incidences
          except for a logical-creation-story can be established. For Virus, at
          least, no doctor will be able to tell you where virus comes from.
          <br />
          <br />
          <iframe
            style={{ width: "100%" }}
            src="https://www.youtube.com/embed/MTM2Pw73Ol0"
            title="YouTube video player"
          ></iframe>
          just because antibody creation is correlated with illness, doesn't
          mean virus is the cause. Where does the first virus come from? From
          bacteria. Under an electron microscope, we see proteins of virus
          coming out of the cell, never have we seen the whole virus on the move
          <TwitterTweetEmbed
            key="1435265064509050880"
            tweetId="1435265064509050880"
          />
          <TwitterTweetEmbed
            key="1433802945225707526"
            tweetId="1433802945225707526"
          />
          <TwitterTweetEmbed
            key="1433820799908163585"
            tweetId="1433820799908163585"
          />
          You get a prize for being the&nbsp;
          <a href="https://froth.app/stats">greatest yeast-cleaner</a>, tho
          <br />
          <br />
          The Great Leap Forward had 16m excess deaths
          <br />
          <br />
          <TwitterTweetEmbed
            key="1433877605606952965"
            tweetId="1433877605606952965"
          />
          <br />
          Is all&nbsp;<a href="https://lightte.ch">government gentrification</a>
          , existing biz (abject) m2 laundering (intent)?
          <br />
          <br />
          <div
            style={{
              backgroundColor: "rgb(220,100,80)",
              color: "rgb(230,230,230)",
              borderBottom: "1px solid grey"
            }}
          >
            FDA is ignoring prevalence of lymphomatic-node discharging of the
            mRNA-sporing-graphs,
            <div
              style={{
                fontWeight: "bolder",
                backgroundColor: "white",
                margin: "4px",
                color: "grey"
              }}
            >
              In 17 of the vaccinated patients with HLN (5.1%), the “hot” nodes
              reflected&nbsp;
              <a href="https://link.springer.com/article/10.1007/s00259-021-05314-2#:~:text=In%20332">
                malignant nodal disease
              </a>
              &nbsp;(MHL). An estimated 1,297,027 people in the US are either
              living with, or are in remission from, &nbsp;
              <a href="https://www.lls.org/facts-and-statistics/facts-and-statistics-overview#:~:text=Prevalence">
                leukemia, lymphoma or myeloma
              </a>
              .
            </div>
          </div>
          void-antigen {"=>"} Lymphoma nodal leakage caused by void-antigen,
          how? Idk and&nbsp;
          <span style={{ textDecoration: "underline" }}>
            that was my initial concern
          </span>
          , but idk what&nbsp;
          <span style={{ textDecoration: "underline" }}>
            a malignant hot node
          </span>
          &nbsp;looks like, lo it is larger by 4.8% than the population estimate
          of lymphoma and melanoma
          <br />
          Virons are byproducts,&nbsp;
          <a href="https://froth.app">bacteria cause sickness</a>
          <br />
          <br />
          <div
            style={{
              backgroundColor: "rgb(120,100,250)",
              color: "rgb(230,230,230)",
              borderBottom: "1px solid grey"
            }}
          >
            Long-term usually-means written-down price-fixes, #Degrowth,
            #BipartisanGerontocracy
            <br />
            <div
              style={{
                fontWeight: "bolder",
                backgroundColor: "white",
                margin: "4px",
                color: "grey"
              }}
            >
              GDP/p constant .&nbsp;
              <a href="https://vaults.biz">inverse-home-prices/hours-worked</a>
              &nbsp;. down-payments are deposits, not options . invoices are
              theft
            </div>
          </div>
          501c3 are #GovernmentMonopsony, not a non-profit @IRSnews,
          #BondVigilantes, #ComparativeAdvantageDefense,&nbsp;
          <a href="https://vau.money">3% under $2k max $60 spoofable-geohash</a>
          , Net export sellout uh public-park depositary 1/44 a.k.a. 4400% or
          44x! Aaaaaaalirght treasury-shares have scruples too
          <br />
          <br />
          <div
            style={{
              backgroundColor: "rgb(20,190,20)",
              color: "rgb(230,230,230)",
              borderBottom: "1px solid grey"
            }}
          >
            not&nbsp;
            <span role="img" aria-label="rose">
              &#x1F339;
            </span>
            <span role="img" aria-label="sock">
              &#x1F9E6;
            </span>
            , one would represent purebred&nbsp;
            <span role="img" aria-label="squirrel">
              🐿
            </span>
            <br />
            ☭ these aren’t our tools, but they are our margins #ConsumerTwitter
            <br />
            <div
              style={{
                fontWeight: "bolder",
                backgroundColor: "white",
                margin: "4px",
                color: "grey"
              }}
            >
              The Government NEEDS to be overthrown if they break Article 3 &
              Tranquility in the preamble for domestic enemies of
              intentional-harming lenders, insurers and
              front-running+non-improved+non-rollover, implausible-use landlords
              outlay-scope, #BipartisanMonopsony
            </div>
          </div>
          <br />
          . @larry_kudlow , fmr NEC Dir. calling bond write downs by
          @federalreserve as,” withdrawing from the market.” @FTC #cfius does
          treasury represent people only when they’re taxing, not being
          steady-stewards? @SaverParty #MarxismIsParetoEfficient
          #MarginsAreConsumers #ConsumerTwitter
          <br />
          <br />
          Cornering the market is competing with consumers
          <br />
          <br />
          Pareto-efficiency and classical-socialism is when supply == demand,
          any margin is dead-weight in a finite-producer world
          <br />
          <br />
          <div
            style={{
              backgroundColor: "rgb(20,190,20)",
              color: "rgb(230,230,230)",
              borderBottom: "1px solid grey"
            }}
          >
            You cannot call an election by extrapolating before shuffling the
            marble-cake-state that is NJ (38% voting-age non-voters, 28%
            registered-non-voters) #SAVERPARTY202X
            <div
              style={{
                fontWeight: "bolder",
                backgroundColor: "white",
                margin: "4px",
                color: "grey"
              }}
            >
              Nor announce early voting results in a tranched way. ANYWAY
              content-addressable ArrayArrays is my method of voting I invented,
              should work. Uid in array, way+uid or abstract on-device id
              anonymous to cloud, or public...
            </div>
          </div>
          <br />
          40% of government roads goes to debt service to NJ, how could
          Republicans want government to own them instead of
          target-margin-networks of finite producers... all parties other than
          @SaverParty want growth of GDP/pop, for what? trueGDP is without m2
          minus currencyComponentOfM1 - efficiency is higher
          inverse-home-prices/hours-worked. We have an influx of 75+/45-64 and
          they had their whole lives to save&nbsp;
          <a href="https://saverparty.xyz">@SaverParty</a>
          <br />
          <br />
          <div
            style={{
              backgroundColor: "rgb(20,190,20)",
              color: "rgb(230,230,230)",
              borderBottom: "1px solid grey"
            }}
          >
            BOTTOM IS BEST, #FreeRiderMutables, #BroughtForwardDemand
            <div
              style={{
                fontWeight: "bolder",
                backgroundColor: "white",
                margin: "4px",
                color: "grey"
              }}
            >
              Government needs to target margins, not own the roads, why do
              republicans want to gentrify the roads, water pipes and broadband
              instead of target margin networks and finite producers
            </div>
          </div>
          <TwitterTweetEmbed
            key="1428797720546906113"
            tweetId="1428797720546906113"
          />
          {/**I can’t believe Blinken is sleeping at a time like this
            🐿post-tort-socialism -spore virus protein 4 money
            @ frothanalysis
            Like a methane fire @ SDOT @ DHSgov #911truth #Racketeering #M2Laundering @77WABCradio */}
          3% under $2k max $60 for sewage-police without federal-ownership, just
          stewardship... truncated sales tax on spoofable-geohash
          <br />
          <br />
          Nothing unforeseeable is possible - Useless Price inelasticity and
          false ownership
          <br />
          <br />
          Fund sewage police, not free-rider-mutables and gentrify for m2
          laundering, third-party-beneficiary standings of @SaverParty to
          BondIndexFunds: BondVigilantes and Millennials unite against 20x
          rental-income per capita!
          <br />
          <div
            style={{
              backgroundColor: "rgb(20,190,20)",
              color: "rgb(230,230,230)",
              borderBottom: "1px solid grey"
            }}
          >
            GLOBAL STEWARDSHIP OF LOCAL POWER BY RECEIPTS AND OUTLAYS
            <div
              style={{
                fontWeight: "bolder",
                backgroundColor: "white",
                margin: "4px",
                color: "grey"
              }}
            >
              By protocol of spoofable geohash at payment terminals, I'm
              building mvp for it at vaumoney
            </div>
          </div>
          <br />
          School systems are always trade secrets and prohibiting kids from
          earning money; also, abjectly laundering to bond index funds, the only
          way to make a deal for "welfare" gentrification for existing biz
          <TwitterTweetEmbed
            key="1428796702832594952"
            tweetId="1428796702832594952"
          />
          {/**
            Edward Snowden
            @ Snowden
            ·
            Aug 20, 2021
            Facebook's vision of the future is seen in how they steal and repackage the VRchat concept.
            
            They could have you meet in a designer lounge, on a tropical island, or even atop the helicopter pad of a ship at sea.
            
            Instead they trap you in a low-rez workplace and cut off your legs.
            Boz
            @ boztank
            Horizon Workrooms is now open for collaboration, built for teams to feel like they’re together despite being apart. The tools we currently have serve people to a certain degree, but we’ve lost the ability to be creative and connected, a gap we believe Workrooms can bridge.
            Embedded video
            🐿post-tort-socialism -spore virus protein 4 money
            @ frothanalysis
            Hey uh, why didn’t you explain end to end encryption not being true until it is on device? http://Thumbprint.us/privacy you really grew into yourself! */}
          <div
            style={{
              backgroundColor: "rgb(20,190,20)",
              color: "rgb(230,230,230)",
              borderBottom: "1px solid grey"
            }}
          >
            Bankruptcy should return down payments for LOSING
            <div
              style={{
                fontWeight: "bolder",
                backgroundColor: "white",
                margin: "4px",
                color: "grey"
              }}
            >
              #WelfareIsWarmongering & price-fixing/quota communism instead of
              settled-surplus-value (non-profit, unlimited margin....), & cancel
              is either share-split-bailout or reversem2laundering
            </div>
          </div>
          <br />
          Surplus value implies it is fake, but labor _deserves profits and
          consumters _deserve margins - Nick Carduucci,&nbsp;
          <a href="https://bankingisnot.biz">BankingIsNot.Biz</a>. Marx is
          originally & more conservative so in there of eternally than Mises
          <br />
          <br />
          #FundSewagePolice, #GovernmentGentrification,&nbsp;
          <a href="https://micro-theory.com">micro-theory.com</a>
          <br />
          <br />
          <div
            style={{
              backgroundColor: "rgb(20,190,20)",
              color: "rgb(230,230,230)",
              borderBottom: "1px solid grey"
            }}
          >
            Protect yourself: do not unionize for non-rollover invoices are
            theft or dues
            <div
              style={{
                fontWeight: "bolder",
                backgroundColor: "white",
                margin: "4px",
                color: "grey"
              }}
            >
              There is not infinite producers, discrimination is
              involuntary-servitude
            </div>
          </div>
          <br />
          Problem Solvers' caucus is #GovernmentMonopsony
          #GovernmentGentriciation #MillennialIncomeDeficit
          #CreditCounterfeitLaundering #ImplausibleLandlordUse #Gerontocracy
          #LeftIsBetter #BottomIsBest
          <br />
          <br />
          The scope of the government is #FreePeopleLawsuits & never
          #FreeRiderMutables,&nbsp;
          <a href="https://nationalsecuritycasino.com">Article 4</a>
          <TwitterTweetEmbed
            key="1428487028036014080"
            tweetId="1428487028036014080"
          />
          {/**Content-addressable keyboxes are not new, merely having it as a hard-tamper-proof-key is new @ StephenM ah, sorry about that @ logindotgov http://nationalsecuritycasino.com */}
          <br />
          Why do Republicans want government to own the roads, instead of
          margin-target? @SaverParty @NickCarducci carducci.us
          <br />
          <br />
          <a href="https://humanharvest.info">Exclusion</a>&nbsp;requred a
          court-order, of which requires logistical-proof; else is free-rider-
          <a href="https://residualsplit.us">servitude</a>
          &nbsp;fraud on usurped grounds
          <div style={{ backgroundColor: "rgb(218,90,90)" }}>
            The new Bernie Madoffs like @fdic ? @paynecmwealth no money is
            hidden
            <br />
            <br />
            currencyComponentOfM1 includes checking. Let me be a financial
            institution without the monopsony bit @GovChristie
          </div>
          <br />
          <div
            style={{
              overflow: "hidden",
              width: "100%",
              height: !this.state.openLeadingCities ? "min-content" : "0px"
            }}
          >
            Upfront fees do not cripple business it frees them if there is a
            decent after-market marketplace that isn’t futher run on credit
            counterfeit @IBM
            <TwitterTweetEmbed
              key="1428436617790955525"
              tweetId="1428436617790955525"
            />
            {/**I object to old people saying, “we are enslaving our kids!” I appreciate the thought, but we can never pay the debt unless you take from http://laborequity.us & @SaverParty for http://residualsplit.us

            #RepublicansAreCommunists #CreditCounterfeitLaundering */}
            <br />
            The virus comes from within nick@Thumbprint.us - Social Calendar &
            more! @viathumbprint · 21m The pores @JohnsHopkinsSPH
            <br />
            <br />
            <div
              style={{
                backgroundColor: "rgb(100,190,90)"
              }}
            >
              Neil deGrasse Tyson @neiltyson · Apr 23: "How big is a Zillion,
              you ask?
              <br />
              Not sure. But I think it's a 1000 times larger than a Squillion,
              but only 1/1000th of a Gajillion.
              <br />
              And&nbsp;
              <span style={{ backgroundColor: "rgb(160,90,190)" }}>
                we&nbsp;
                <span style={{ backgroundColor: "rgb(130,70,150)" }}>have</span>
                &nbsp;
                <span style={{ backgroundColor: "rgb(180,110,220)" }}>top</span>
                &nbsp;people
              </span>
              &nbsp;still trying to figure out the true size of a Bazillion."
            </div>
            <br />
            If most are fat, old, afro or Hispanic and 80% effectiveness to
            boot. I can withhold people based on that correlation and not on
            subjective minimal viable product
            <br />
            <br />
            50% worsened lymphoma obviously. J&J not advertised as being
            cultured with stem cells ... Cells without an antigen is a tumor
            <br />
            <br />
            B-cell creativity can grow dependent. Charles Darwin observed that
            @CDCDirector
            <br />
            <br />
            The right is not from Civil Rights it is free-rider-excluder
            enslaving those denied not based on mvp, of as evidenced as a
            cease-and-desist defamation order would require.
            <br />
            <br />
            Here, you must prove condensation does not happen @uscourts
            @neiltyson
            <br />
            <br />
            . @Partnership4NYC http://30under5.us I’ve been saying this for
            years... http://lightte.ch http://3under2.us
            <br />
            <br />
            Less taxes is good because marginal propensity to consume produces
            more comparatively-advantages trades found
            <br />
            <br />
            Do stocks benefit if they improve by beta? @larry_kudlow
            <br />
            <br />
            “Taxes[, m2 and credit] is inflation” - Kudlow!
            <br />
            <br />
            The unemployment rate is printed. Think like a CEO
            <br />
            <br />
            Your b-cell dysregulation is as insidious as the seagulls murdered
            and not seen in the ocean from windfarms
            <br />
            <br />
            Why is there standardized testing passing to pay extra in school? It
            is not&nbsp;
            <a
              href="https://lightte.ch"
              style={{
                backgroundColor: "rgb(160,90,190)",

                color: "black",
                textDecoration: "none"
              }}
            >
              <span style={{ backgroundColor: "rgb(130,70,150)" }}>free</span>
              -rider-
              <span style={{ backgroundColor: "rgb(180,110,220)" }}>
                immutable
              </span>
            </a>
            &nbsp;School is one of the schemes to&nbsp;
            <a href="https://www.zippia.com/landlord-jobs/demographics/">
              keep youth from earning
            </a>
            &nbsp;wealth while they learn.
            <br />
            <br />
            “Non-profits shouldn’t by bipartisan, they should be non-partisan” -
            @VP
            <br />
            <br />
            How about make calling elections illegal.? Not even shuffled
            population @cnn @ap @fec @Google
            <br />
            <br />
            “No evidence, not enough to call” @brikeilarcnn make up your mind?
            Are you an extrapolationist or not? More WORKING-witnesses to
            2020-election-fraud that crossed the Antarctic to disprove
            flat-earthers @fcc @uscourts @TheJusticeDept
            <div
              style={{
                backgroundColor: "rgb(50,70,110)",
                color: "rgb(210,220,240)",
                padding: "10px"
              }}
            >
              “He is shooting blanks!” (Not earned from a willing customer,
              <a href="https://nationalsecuritycasino.com">nationalistic</a>)
              <br />
              <br />
              Andrew Yang
              <br />
              <br />
              “You’ve got my vote! This city needs something new.”
              <br />
              <br />
              @henican 200k vaccinated who want it. Stfu. 2000 strains
              discovered a year. Virus rises all the way. Publish
              countertop-talking wuss @nytimesbooks
              life-expectancy/median-death-age is 1. You can publish use
              http://mortality.org
              <br />
              <br />
              FBI 2015 report says 200k children abducted since #COVIDー19
              <br />
              <br />
              @AP LIED UNSHUFFLED POPULATION CANNOT BE EXTRAPOLATED AT 61%
              @MonmouthCoClerk
              <br />
              <br />
              @dominionvoting shouldn’t require a court order for voters to
              audit them. Am I teaching you something about consensus or
              content-addressability IPFS
              <br />
              <br />
              Owned by the Chinese and Russians #Cfius @aoc @smerconish
              <br />
              <br />
              The point is that no one is “making money” from it because it will
              be a public service provided by the government. Thumbprint.us -
              Social Calendar & more! @viathumbprint
              <br />
              <br />
              Investment by indebted gov where do they get the credit? @ftc
              prohibiting trade, monopsony
            </div>
          </div>
          <br />
          magnate.company e=mc^2 is calculus blasphemy. 3d hoity-hoy
          <br />
          <br />
          At $121k/year for government services per person in bond-value @ftc we
          cannot say @USTreasury credit is tax-payer funded @MoodysInvSvc
          @SamSeder
          <br />
          <br />
          <button
            onClick={() =>
              this.setState({
                openLeadingCities: !this.state.openLeadingCities
              })
            }
          >
            openLeadingCities
          </button>
          <br />
          <br />
          <div
            style={{
              overflow: "hidden",
              width: "100%",
              height: this.state.openLeadingCities ? "min-content" : "0px"
            }}
          >
            <LeadingCities />
            <br />
          </div>
          Bonds are promises on dollars... Thumbprint.us - Social Calendar &
          more! @viathumbprint
          <br />
          <br />
          The government is not people read some Marx
          <br />
          <br />
          The point is that no one is “making money” from it because it will be
          a public service provided by the government.
          <br />
          <br />
          Tax-man beyond free-rider-immutable, and to be apathetic towards
          free-riders of competing with consumers (not-capital-improvement and
          settling-more-than-you-can-use-yourself in monopsonizing
          resources*labor Supply)
          <br />
          <br />
          Marx was not a communist - credit is haram and
          youth-/consumer-abuse... sometimes just&nbsp;
          <a href="https://saverparty.xyz">invoice-theft</a>
          &nbsp;force by threat dead-or-alive, and castile doctrine applies per
          international human rights law
          <br />
          <br />
          when you say importing, do you mean money or items? @larry_kudlow econ
          101 @77WABCradio
          <br />
          <br />
          If there no ATM fees then she must be making “money” by lending? The
          labor*resource Supply already exists; that nonconsensual promise of
          someone else’s money only raises price. This sounds like a monopsony
          by indebted Gov to take from people further. http://Residualsplit.us
          @USPS
          <br />
          <br />
          "So the ATM’s would be at Post Offices within every zip code. Most
          commercial banks have deposit limits and fees. These ATM’s would be
          the banking branch of the PO which can already supply things like
          Money Orders that people who have banks don’t need. Check out-press
          conference. moldmask.co, cocaine is money, purity health dpt"
          <br />
          <br />
          I am providing this service and this is compelling my antitrust suit
          @vaultbiz @TheJusticeDept @aoc you already owe money & you’re
          monopsonizing labor*resource Supply @ftc promising money in contract
          of savers.
          <br />
          <br />
          Everyday, the @USTreasury and @federalreserve break Sherman Act,
          Amendment 13 and 14 by instead of giving $70k/yr/person @AndrewYang &
          $300k/yr/person in @SenBooker baby-bonds, they use it to take assets
          from people... the government is not people it is other governments &
          @chase
          <br />
          <br />
          Did @Lavorgnanomics just say government debt strong. is that a threat?
          @MNCourts #Counterfeit #MinnesotaIsGuilty @chase @larry_kudlow
          <br />
          <br />
          The point is that no one is “making money” from it because it will be
          a public service provided by the government.
          <br />
          <br />
          The government is not people read some Marx
          <br />
          <br />
          when you say importing, do you mean money or items? @larry_kudlow econ
          101 @77WABCradio
          <br />
          <br />
          you gonna get a hamburger?
          <br />
          <br />
          When mRNA jumpstarts b-cell and t-cell production, it is a tumor
          without an antigen to dissolve with? @CDCgov @NIH @NSF
          <br />
          <br />
          <a href="https://lightte.ch">lightte.ch</a>
          <br />
          <br />
          <div
            style={{
              width: "100%",
              maxWidth: "600px",
              position: "relative"
            }}
          >
            <img
              style={{ width: "100%", height: "auto" }}
              alt="2021 compass, matrix [equity-protection (fractional=reserve), rent-seeking (cancel? accrual)]"
              src={
                this.state.settleDropboxFree
                  ? ""
                  : "https://www.dl.dropboxusercontent.com/s/q9txz5wkr2r9ft7/4vector%20%281%29.png?dl=0"
              }
            />
          </div>
          <br />
          If cops let people own fentanyl as money @SenBooker violent cartels
          wouldn’t be able to hold a candle
          <br />
          <br />
          both Pubs and Dems agree on things like fractional-reserve, to which
          their binary answers would form the left or right side
          <br />
          3-vector
          <br />
          <br />
          each Pubs and Dems have their own views on all things like
          rent-seeking, to which their binary answers would form the left or
          right side
          <br />
          4-vector)
          <br />
          <br />
          Libertarians and Savers agree about fractional-reserve use, but not
          rent seeking
          <br />
          <br />
          Jamie Dimon has a #mentalhealth #mentalillness issue, having grandiose
          thoughts and let those delusions get into his book value of 44x
          debt:cash ratio in 1908. Arrest him, do NOT let him go and if he dies,
          he dies (regardless of gun-threat, Floyd never pulled the trigger like
          brandishing cops, this accident is an escalation between citizens and
          the police-state that is a republic of populists or oligarchs)
          <br />
          <br />
          non-shuffled, -voluntary, or of
          non-correlated-partial-derivative-population is not significant even
          at 61%
          <br />
          please state sample size (n) - 40% military TURNED IT DOWN
          <h1>2052.live: unpaid reporters and judges</h1>
          <div>
            <FraudMoney iframed={iframed} />
          </div>
          The top 20% of people by wealth is way diff than the top 20%
          percentile of wealth
          <br />
          <br />
          Islam calls Castle Doctrine in equity, interest is haram - G-d is
          judge
          <br />
          <br />
          The gov is owned by bond-holders, China & Russia (impossible therefore
          counterfeit or nonconsensual, not useful given same labor*resources
          Supply, to boot and bloated demand with intent to harm consumers, to
          boot as to not flip and settle but rent more than they could otherwise
          make use of themselves, at one point in time to target and remove
          these purchases)
          <br />
          <br />
          @JCats2013 no evidence virus isn't brought up w heat. you can't get
          sick unless I spit in your face, can't [free-rider] exclude someone on
          this basis. thousands of virus' are found every year. you just bought
          the station to propagate for landlords and creditors. there's nothing
          left to do&nbsp;
          <a href="https://3under2.us">
            <b style={{ textDecoration: "none", color: "blue" }}>
              except reposess and reimburse
            </b>
          </a>
          <br />
          <h2>
            Nick Carducci deals with with large numbers, shuffled-population or
            voluntary survey and integrals in theory for practice&nbsp;
            <a
              style={{ textDecoration: "none" }}
              href="https://wavv.art/new_jersey"
            >
              soon
            </a>
          </h2>
          <br />
          <h4>
            Specifically targeting vectors per intention or, if possible, abject
            binary or qualitative stance on the eventual-violence of force
          </h4>
          <br />
          As of now, I see the left of the political compass of Green, Saver,
          Democrat, Libertarian, Republican with an ability for 38% voting-age
          non-voters in U.S. really show their unity in objectivity or uprising
          <br />
          <br />
          <span style={{ fontSize: "13px" }}>
            Can we publish countertop-talking test? Virus rise with
            condensation? Two-thousand new strains discovered a year but humoral
            antibodies for all coronavirus family are the same as mRNA?
            Life-expectancy/median-death-age === 1 (to be confirmed, hold on)?
          </span>
          <br />
          corner the market by niche is the only legal kind
          <br />
          I might be ok with undercover for lethal drug cartels but not Nick’s
          Greenery
          <br />
          damage is garnered around an individual-event and they are clear about
          the product
          <br />
          My mom getting +$400k over covid & +$400k in home value since 2008
          after using my grandfather's office-rental parkway units to dish $800k
          Imagine selling out my customers for diluted equity among many burdens
          other than my own instead of http://lightte.ch @SamSeder
          Euros-banksquatters loiter and launder afro-equity to
          creditors-and-rent-seekers (landlords are not builders or for
          themselves for than 5 spots, let someone else build for that planar or
          aerial space, or sell it in a non-prohibitionary and
          intentionally-harmful fashion because you cannot imagine getting what
          you can get and minding your business of consent until minimum viable
          product and labor's individually-sovereign proclivities as would any
          owner of property, or saver (not a bond-value)).
          <br />
          <br />
          <div style={{ backgroundColor: "rgb(160,90,190)" }}>
            Since the repeal of Glass Steagal and @ftc malfeasance in checking
            their own false advertising, ‘saver’ label has been expropriated for
            lending, but that doesn’t help the public when supply exists without
            monopsony by counterfeit
          </div>
          <br />
          http://nationalsecuritycasino.com Taxing for free-rider-immutable will
          deplete growth of more people working/tech* wage / housing price? No.
          But if you pay in advance of turning off service, put in tolls and
          margin-targeting monopsony will certainly slow growth in
          productive-work/housing Free-rider-mutable until required
          http://3under2.us marx never said he was a communist moldmask.co,
          cocaine is money, purity health dpt @SaverParty · 5h not a policy of
          love but preservation, sustainability if you want to not get granular
          about it. identical to @mises Rentier do not provide housing, buyers,
          builders @KAErdmann
          <br />
          <br />
          ATM or transaction fees are only way to run personal banking without
          being 44x non-finance wealth distribution
          <br />
          <br />
          200 million vaccinated, if you don't want them they aren't having them
          be now, are you trying to start a civil war @cnn @drsanjaygupta
          @jaketapper
          <br />
          <br />I don't wan't 23% antivaxxers (why do pro-mask strawman and cite
          secondary source-correlation with partial derivatives (not shuffling
          an entire population, voluntary or population of an uncorrelated-set)]
          <br />
          <br />
          Why don't they coun't housing in consumer-price-index? They want to
          launder assets to a smaller percentage, income-inequality is
          coincidence and hardly correlated at that to union-membership - it
          dropped when private bonds were paid off with public credit in the New
          Deal somewhere
          <br />
          <br />
          They couldn’t handle http://micro-theory.com @paulkrugman I was like,
          GDP is population if you are gonna use that integrally @JohnsHopkins
          <br />
          <br />
          Unemployment insurance. It only makes things expensive, “a net loss”
          Paul Krugman. Protects those who had jobs and their creditors, and
          catastrophe is the only reason not related performance a firing can
          payout. This leads to grave conflicts of interest. If
          employment/population is back to normal levels but with different
          people, those firings were fraudulent Instead of coagulating demand,
          promising other peoples’ money, can we settle demand at lower prices?
          <br />
          <br />
          Consent from everyone until minimum viable product: can I disclude
          others or show their hand sell them a price-increase or snake-oil - or
          overbearing copyright... if equity-rights are at all to be respected,
          deplete their new antibody-making-ability and become dependent on
          lab-graft, or keep humidity-on-face to which virus-antigen so small
          can be CREATED (where does virus come from?)
          <br />
          <br />
          oligopolies are when all competitors start competing with consumers by
          prohibiting trade, 20' and 52' are when shows go to break. They will
          say they must start on the hour. A market is not one if the niches
          aren't filled or demand is&nbsp;
          <a href="https://foiegras.life">brought-forward</a>. No, they are
          helping, juicing prices-for-same labor*resource Supply
          <br />
          <br />
          life-expectancy/median-death-age is 1, but 200k children vanished
          since Covid started
        </div>
      </div>
    );
  }
}
