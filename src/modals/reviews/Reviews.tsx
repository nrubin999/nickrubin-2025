import styles from './Reviews.module.css';

import Modal from '../Modal';
import StarIcon from '../../icons/star-solid.svg';

type ReviewsProps = {
  visible: boolean;
  hideModal: () => void;
};

export default function Reviews(props: ReviewsProps) {
  return (
    <Modal visible={props.visible} hideModal={props.hideModal} width={570}>
      <div className={styles.reviewsContainer}>
        {/*<div className="section-title reviews-section-title">
          What users say
        </div>*/}
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            I can finally consume news! This is the first time I've ever felt
            compelled to leave a review for an app. I had gotten to the point in
            life where I was avoiding news all together because it all seemed so
            sensational. But I felt just as cruddy being out of touch. I
            downloaded this when it was the featured app of the day and since
            then, my life has literally been changed. Being able to stay up to
            date without the mental strain of sorting through sensationalist
            opinions is a game changer. This is the future of news. Mainstream
            news takes energy to consume. This gives energy. Please keep this app
            going. I would happily pay for more categories.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>Sonicheroguys</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            This is my first review on the App Store after holding an iPhone as a
            consumer for over ten years. If I could rate this app higher, I
            would. I get most of my headlines and alerts from Winno, and it truly
            is a fantastic resource for anyone interested in keeping up with
            breaking news. Keep up the great work!
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>Mr. Review Master</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            Top notch news app - really innovative. I love this news app so much.
            This is the first news app I've seen in awhile that really brings
            along something truly fresh and unique. The bite-sized presentation
            of facts is perfect for staying up on key bits of information without
            click-baity or misleading headlines. I have high hopes for this app
            and would love to see it grow bigger.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>fyreous</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            I never give reviews, but I have to give a review for Winno because
            it is a life-changer for me. I had a problem with keeping up with
            news because I have crazy hours... before I started using Winno. The
            information is succinct and perfectly summarized in a flow, with key
            terms often explained in its call-out box. It is extremely useful to
            flow on specific topics, and I love this information efficiency.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>PearlyOrchid</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            FINALLY, I can clear my head! I ran across this app after seeing it
            on a YouTube video. I LOVE IT and it is my new favorite app. I spend
            hours and hours quarantined listening to one piece of bad news after
            another...with a different opinion on each channel. But now, I can
            read a 2-3 sentence personalized &quot;non-biased blurb&quot; and
            feel that I have been informed OR I can go on and read the entire
            article...my choice. I have not watched cable news since I bought the
            app and my stress level has gone down but my knowledge level has gone
            up. Thanks, we all needed this!
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>Rstrick41</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            Best news app in the store. My favorite and most used app. It's like
            a personal assistant that keeps you up to speed with what's going on.
            You get the facts at a glance and good sources to dig deeper. Most
            amazingly it's pretty unbiased.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>ducdybcdgbc</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            Perfect app. I'm not someone who has time (or the interest) to search
            multiple news outlets to get my information, so before Winno I barely
            kept up to date with the news. This app makes it so easy to follow
            topics that interest you in tiny doses which you can easily read
            about through the in-app links to the sources. I also love the
            #history-photos feed it's great.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>JennaVC</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            Hands down the best way to consume the news. I'm sick and tired of
            all these garbage news apps using AI to recommend me articles just so
            I click on them and they make a profit. I love that with Winno I
            don't have to deal with any clickbait titles or scroll through an
            entire article just to realize it's a bunch of fluff. The focused
            categories are great for when I want to follow a single developing
            news story and not worry about everything going on in a topic as
            broad as Politics, for example. This app is like the best parts of
            Axios + Twitter + traditional news combined.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>37473828477</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            Often people speak about information overload in an era where there
            is information everywhere and where information tends to be
            overwhelming. This app does a brilliant job of making current events
            both easy to keep up with and save yourself time while doing so. I
            will never use another news app.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>Garbage, TJ</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            It's so good! First of all it's live news! And it's like the best
            news app ever found! Its greatness cannot be explained in words.
            Definitely a must have.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>SlothGurl</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            The future of news consumption. I highly recommend Winno. It's so
            easy to customize your feed to your liking. I love being able to
            follow up on important topics like climate change and trump-probes
            with confidence, knowing the articles on here are 100% real and not
            BS fear mongering. If you're looking for a way to break out of the
            Fox News / CNN clown show, please check out Winno! It is truly the
            future of news!
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>Sean11420</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            Short review: So good I want to pay money for it! Long review: Winno
            checks all the boxes for good news as well as good software: Clear,
            Organized, Factual, Non-Partisan, and doesn't require too much
            personal data.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>GödelEscherBach</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            This news source is my all-time favorite. I've never run into one
            that isn't clouded by so much bias and political leanings. It's so
            refreshing and enlightening to simply experience factual headlines
            coming in.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>classact52</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            Quality news without the spam. Winno delivers enough news for me to
            feel like I know what's going on in the world, without being
            inundated with more information than I know what to do with. Winno
            respects my time by taking up as little of my time as possible, while
            maximizing the value of the small amount of time it does consume.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>Ghostfly48</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            Super helpful for staying informed! Wow! SUCH a well thought out app.
            The layout on iPad feels like a modified layout of the iPhone
            version, but that very minor thought is COMPLETELY outweighed by how
            helpful this app is for me staying informed, and I cannot over state
            how valuable it is that this developer has clearly thought about
            their users and made decisions out of consideration for their users.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>mchisolm0</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            This has been my go-to app for getting news fast. It's extremely
            convenient to read the well-put-together sound bites and decide,
            thereafter, whether to read the associated article or not. Frankly,
            the idea of this app is brilliant.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>SKBlank</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            Winno sets the standard against which all news-feed apps will forever
            be judged. Hands-down the best app out there for customizing a feed
            that is bias-free and uniquely your own.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>Chrisanneiam</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            Usually don't review, but want to show appreciation. This app
            perfectly suits my needs as a consumer who wants unbiased and
            quickly-summarized news. It's free, has a simple and attractive UI,
            and streamlines all the important headlines you want to read. I
            recommend this to all my peers and would even pay money for it if I
            needed to. Heck, I'd probably even donate just to help support the
            team.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>jmwalker0498</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            The editorial team does an awesome job at only showing “just the
            facts”. With all the opinion heavy nonsense in the news today, I've
            been looking for a way to stay updated without all the bias. This is
            it. The interface is well designed, the app is really well coded, the
            content is of good quality, and I appreciate the links to read more
            ... Look forward to reading more.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>Habit Builder</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            This is the best compilation of real news stories I have seen. I pick
            the subjects and am delivered a carefully curated set of the latest
            articles from trusted sources I could imagine. Thank you, whoever is
            behind this!
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>ntf375$.com</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            Best news app out there no doubt. Not biased, easy comprehension,
            perfectly curated notification. Bravo guys!!
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
            <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>TolucoMan</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            Best way to start the news day. I have a bunch of news apps that I
            love, but I always start the day with Winno because it is succinct,
            focused and unbiased. Highly recommended.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>eastoneddie</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            Clear and concise! Easy to digest snippets of news that are clear to
            understand. Won't bombard you with notifications. This is what I want
            as a daily source of information and I don't know what else to ask
            for.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>BlairZ-21</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            I wanted to share with you how much I love this app and how life
            changing it has been. This app has helped many students my age stay
            informed. I cannot say enough good things. Thank you to everyone that
            has contributed to this app!
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>Amy M.</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            The solution to news on social media. I love this app. It has
            succinct, current stories and the feed feature is neat and
            convenient. A nice alternative to getting news through social media,
            which is full of commentary and misinformation. Like a Brita for
            news!
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>pfgaggvl</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            New favorite app. Hats off to the developers who created this
            beautiful app. It's designed to give you quick and fact-based
            summaries so you're not constantly inundated with tons of irrelevant
            headlines and stories. You pick the topics you want to follow and
            they quietly deliver summaries to your iPhone or iPad.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>mattpetermann</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            Good concept, even better implementation. So first off, this app is
            pretty amazing. From the way it implements Sign In with Apple to the
            way it categorizes feeds. And then the concise pop up links. Great
            job guys.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>srtRish</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            Perfect news app. This app is perfect for getting short little
            paragraphs of important news. They make it so easy to find topics and
            get the most relevant information in that topic ... I love this app
            because I can get just enough to be informed, and it helps me figure
            out what's going on in the world without being super confused!
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>ssheaaaaa</div>
          </div>
        </div>
        <div className={styles.reviewItem}>
          <div className={styles.reviewText}>
            Seriously the best. Fantastic UI and only the factual news. This is
            the only news app left on my phone now.
          </div>
          <div className={styles.reviewItemBottom}>
            <div className={styles.reviewStars}>
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
              <img src={StarIcon} className={styles.starIcon} alt="star" />
            </div>
            <div className={styles.reviewUsername}>shiverlay</div>
          </div>
        </div>
      </div>
    </Modal>
  );
}


