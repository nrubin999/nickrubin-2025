import styles from './Manifesto.module.css';

import Modal from '../Modal';

type ManifestoProps = {
  visible: boolean;
  hideModal: () => void;
};

export default function Manifesto(props: ManifestoProps) {
  return (
    <Modal visible={props.visible} hideModal={props.hideModal} width={570}>
      <div className={styles.modalContainer} onClick={modalClick}>
        <div className={styles.manifestoText}>
          {/* <div className={styles.winnoImageContainer}>
            <img src={winno} className={styles.winnoImage} alt="Winno graphic" />
          </div> */}
          <span className={styles.bold}>Read the Winno manifesto here:</span>
          <br />
          <br />
          We want to help people understand the world better.
          <br />
          <br />
          News is broken. Surveys show a large majority of Americans feel
          overwhelmed by the news and the vast amount of information online. What
          important things happened today? This question should be easy to answer
          in the 21st century. It is not.
          <br />
          <br />
          We're spoon-fed junk. We scroll mindlessly through feeds of endless
          content, filtered through algorithms, where fact and opinion are
          blurred. No flow, no structure, no chronology. Just unfocused noise and
          shrill voices. We're left piecing together stories on our own.
          <br />
          <br />
          Not anymore. We're rebuilding news from the ground up, for the internet
          era.
          <br />
          <br />
          Winno is an app where you can get all the important updates to a story
          in one place, live. Both fast-paced breaking news and slower developing
          stories alike. We don't post links or headlines; we condense a
          development into its core components and post just the facts. Curated,
          written and fact-checked by our team. We give you everything you need
          to know, without the noise.
          <br />
          <br />
          By shrinking the unit of news from article to fact, we can present
          primary sources and quotes without opinion mixed in. It lets us
          comprehensively cover a story in real-time and be clear, engaging and
          objective. And because our approach is disciplined and feeds are
          finite, Winno lets people feel 100% up-to-date at the end of the day.
          Not like there's always more to wade through.
          <br />
          <br />
          Because we've built a self-contained product, we don't need to publish
          rubbish to attract clicks on third-party platforms. We can focus
          instead on creating the best resource for timely, relevant, truthful
          information. Just the stuff that matters. No bullshit.
          <br />
          <br />
          We are committed to building a humane, attention-friendly experience.
          Unlike other news outlets, we give users the power to choose which
          stories to follow and get notifications about. Our goal is to create a
          healthy product that people love, and we will ensure that our
          incentives as a business always align.
        </div>
      </div>
    </Modal>
  );
}

function modalClick(event: React.MouseEvent<HTMLDivElement>) {
  event.stopPropagation();
}


