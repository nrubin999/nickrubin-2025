import { useState } from 'react';
import { Tooltip } from 'react-tooltip';

import 'react-tooltip/dist/react-tooltip.css';

import styles from './App.module.css';

import './fonts.css';

import RouteImage from './images/route.png';
import DrakeImage from './images/drake.png';
import SunsetImage from './images/sunset.jpeg';
import VanagonImage from './images/vanagon.jpeg';
import CountriesImage from './images/countries.png';

import Manifesto from './modals/manifesto/Manifesto';
import Reviews from './modals/reviews/Reviews';

export default function App() {
  const [showManifesto, setShowManifesto] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  return (
    <>
      {showManifesto && (
        <Manifesto visible={showManifesto} hideModal={() => setShowManifesto(false)} />
      )}
      {showReviews && (
        <Reviews visible={showReviews} hideModal={() => setShowReviews(false)} />
      )}
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.name}>Nick Rubin</div>
          <div className={styles.lines}>
            <div className={styles.row}>
              <div>
                Investor at{' '}
                <a
                  href="https://www.firstround.com/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  First Round
                </a>{' '}
                in San Francisco
                <span className={styles.fontPreload}>.</span>
              </div>
            </div>
            <div className={styles.row}>
              <Tooltip className={styles.textTooltip} id="symsys" />
              <div>
                Graduated from Stanford in 2021 (
                <span
                  className={styles.dotted}
                  data-tooltip-id="symsys"
                  data-tooltip-content="An interdisciplinary program focusing on the relationship between natural and artificial systems that represent, process, and act on information. Concentration was Human-Computer Interaction."
                >
                  Symbolic Systems
                </span>
                ).
              </div>
            </div>
            <div className={styles.row}>
              <div>
                Founded{' '}
                <a
                  href="https://sendo.dev"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  Sendo
                </a>
                {' '}(YC W22), an SMS API for developers.
              </div>
            </div>
            <div className={styles.row}>
              <div>
                Launched{' '}
                <a
                  href="https://news.winno.app"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  Winno
                </a>{' '}
                in 2019 for{' '}
                <span
                  onClick={() => setShowManifesto(true)}
                  className={styles.dotted}
                >
                  clickbait-free news
                </span>
                .
              </div>
              <div className={styles.indent}>
                • Apple's App of the Day x2 in 2020, 2021
              </div>
              <div className={styles.indent}>
                • 20,000+ daily users, 1,500{' '}
                <span
                  onClick={() => setShowReviews(true)}
                  className={styles.dotted}
                >
                  5-star reviews
                </span>
              </div>
            </div>
            <div className={styles.row}>
              <div>
                Pivoted to paid SMS newsletter platform (
                <a
                  href="https://winno.app/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  link
                </a>
                )
              </div>
            </div>
            <div className={styles.row}>
              <div>
                Organized{' '}
                <a
                  href="https://stanforddaily.com/2018/02/20/fourth-annual-treehacks-addresses-security-energy-and-health/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  TreeHacks
                </a>{' '}
                in 2017, 2018 (tech lead), 2019
              </div>
            </div>
            <div className={styles.row}>
              <Tooltip id="trainTooltip" className={styles.imageTooltip} />
              <div>
                In 2017 I rode trains from{' '}
                <span
                  data-tooltip-id="trainTooltip"
                  data-tooltip-html={`<img src="${RouteImage}" width="100%" />`}
                  className={styles.dotted}
                >
                  Portugal to Vietnam
                </span>
                .
              </div>
            </div>
            <div className={styles.row}>
              <Tooltip id="drakeTooltip" className={styles.drakeTooltip} />
              <div>
                From 2015-19 I sold vintage clothing{' '}
                <span
                  data-tooltip-id="drakeTooltip"
                  data-tooltip-html={`<img src="${DrakeImage}" width="100%" />`}
                  className={styles.dotted}
                >
                  to <span className={styles.hideMobile}>celebriites</span><span className={styles.showMobile}>celebs</span>
                </span>
                .
              </div>
            </div>
            <div className={styles.row}>
              <div>
                <span className={styles.hideMobile}>SWE intern</span>
                <span className={styles.showMobile}>Interned</span> at Hipcamp and
                Harvard's Berkman Center.
              </div>
            </div>
            <div className={styles.row}>
              <div>
                In 2015 I launched{' '}
                <a
                  href="https://arstechnica.com/tech-policy/2014/08/track-whos-buying-politicians-with-greenhouse-browser-add-on/"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.link}
                >
                  Greenhouse
                </a>{' '}
                to expose corruption.
                {/* <span className={styles.hideMobile}>political</span> corruption. */}
              </div>
              <div className={styles.indent}>
                • Covered by news outlets in 20+ countries
              </div>
              <div className={styles.indent}>
                • Over 3M shares on Facebook, 500k+ downloads
              </div>
            </div>
            <div className={styles.row}>
              <Tooltip id="sunsetTooltip" className={styles.imageTooltip} />
              <div>
                I grew up in{' '}
                <span
                  data-tooltip-id="sunsetTooltip"
                  data-tooltip-html={`<img src="${SunsetImage}" width="100%" />`}
                  className={styles.dotted}
                >
                  Seattle
                </span>{' '}
                and went to Lakeside ('16).
              </div>
            </div>
            <div className={styles.row}>
              <Tooltip id="sunsetTooltip" className={styles.imageTooltip} />
              <div>
                I drive a 1980s 
                {' '}<span
                  data-tooltip-id="sunsetTooltip"
                  data-tooltip-html={`<img src="${VanagonImage}" width="300px" />`}
                  className={styles.dotted}
                >
                  Volkswagen Vanagon
                </span>{' '}
                camper van.
              </div>
            </div>
            <div className={styles.row}>
              <Tooltip id="countriesTooltip" className={styles.imageTooltip} />
              <div>
                I've been to 40/50 U.S. states and{' '}
                <span
                  data-tooltip-id="countriesTooltip"
                  data-tooltip-html={`<img src="${CountriesImage}" width="100%" />`}
                  className={styles.dotted}
                >
                  30 countries
                </span>
                .
              </div>
            </div>
            <div className={styles.row}>
              <div>
                Building something cool or want to chat?{' '}
                <a
                  href="&#x6d;ailto&#58;nrubin999&#x40;gmail&#46;com"
                  className={styles.link}
                >
                  Reach out
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}