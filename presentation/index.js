// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

require("../assets/dcrug.css");


const images = {
  talkingHeadsWalk: require("../assets/gifs/talking-heads-walk.gif"),
  talkingHeadsLamp: require("../assets/gifs/talking-heads-lamp.gif"),
  bts: require("../assets/gifs/doug-martsch.gif"),

  sexpistols: require("../assets/gifs/sid-vicious.gif"),
  ramones: require("../assets/gifs/ramones.gif"),
  minorThreat: require("../assets/gifs/minor-threat.gif"),
  decendents: require("../assets/gifs/decendents.gif"),
  badbrains: require("../assets/gifs/bad-brains.gif"),
  beatles: require("../assets/gifs/beatles.gif"),
  tobin: require("../assets/gifs/tobin.gif"),
  devo: require("../assets/gifs/devo.gif"),
  flamingLips2: require("../assets/gifs/flaming-lips-2.gif"),
  sonicYouth2: require("../assets/gifs/sonic-youth-2.gif"),
  joyDivision1: require("../assets/gifs/joy-division-1.gif"),
  joyDivision2: require("../assets/gifs/joy-division-2.gif"),
};

preloader(images);

const theme = createTheme({
  primary: "#cccccc"
});

    // 2. HISTORY
    // PUNK was loud, unstructured, ugly but necessary. It gave a voice to those who wanted to share their opinion. This was the early web. It was raw, ugly, but full of communcation.

    // In walked something different.
    // Post-punk is a diverse[1] type of rock music that emerged in the wake of the punk movement of the 1970s. Drawing inspiration from elements of punk rock while departing from its musical conventions and wider cultural affiliations, post-punk music was marked by varied, experimentalist sensibilities and its "conceptual assault" on rock tradition.[2] Artists embraced electronic music, black dance styles and the avant-garde, as well as novel recording technology and production techniques. The movement also saw the frequent intersection of music with art and politics, as artists liberally drew inspiration from sources such as critical theory, cinema, performance art and modernist literature.[3] Accompanying these musical developments were communities that produced visual art, multimedia performances, independent record labels and fanzines in conjunction with

    // CSS
    // https://eager.io/blog/the-languages-which-almost-were-css/

    // 3. How things were suppose to work

    // 4. How they actually work
    // CSS ZEN Garden

    // 5. What we created to solve the problem

    // 6. Added to the problem
    // SASS, STYLUS, LESS

    // 7. Back to basics





    // 13. CSS Modules
    // 14. Why it is different
    // 15. The bad
    // 16. The good

    // 17. Some demos

    // 18. Questions
    //
    // BANDS
    // https://en.wikipedia.org/wiki/List_of_post-punk_bands
    //

    //
    // GIFS
    //
    // CSS Refactoring - Cat
    // http://img.pandawhale.com/58061-wwwfunnypictureblogcom-VzH9.gif
    //
    // CSS refactoring - Blinds
    // http://lh3.ggpht.com/-7mLGeB7aN4k/U97lgtHmyHI/AAAAAAAAAnU/TWKSHFpCYyk/css-sucks-working-with-css_thumb%25255B2%25255D.gif?imgmax=800

    // QUSTIONS
    // http://66.media.tumblr.com/b257c910362cbc4095d3367efc57993f/tumblr_ml9edu4mN61s05oa1o1_500.gif

    // DAFT PUNK
    // http://31.media.tumblr.com/8cdc957540f0b5998b1fcba9bb7c88de/tumblr_msx6o6SNML1rai8nvo1_400.gif


// You get back to writing plain old CSS
// Example of autoprefixing
// Example of "CSS4"
//   CSS Next
//   CSS Nano
// Over 200 plugins
// Lots of activity
// The next version of Bootstrap is rumored to be written in PostCSS

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]} transitionDuration={500}>

          <Slide bgImage={images.talkingHeadsWalk.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Post CSS
            </Heading>
            <Heading size={1} textColor="lightblue" fit caps>
              Told through Post Punk
            </Heading>
          </Slide>

          <Slide bgImage={images.bts.replace("/", "")} bgDarken={0.75}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Hi I'm Doug March
            </Heading>
            <Heading size={2} textColor="lightblue" fit caps>
              Not Doug Martsch (also not post punk)
            </Heading>
            <Text textColor="white" textSize="1em" margin="100px 0px 0px" bold>
              t: @marchdoe
              <br />
              w: doug-march.com
            </Text>
          </Slide>

          <Slide
            bgImage={images.ramones.replace("/", "")}
            bgDarken={0.25}

            notes="
              <p style='font-size: 30px;'>talk about that
              and that</p>
            ">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Some History
            </Heading>
          </Slide>

          <Slide bgImage={images.sexpistols.replace("/", "")} bgDarken={0.25} >
          </Slide>

          <Slide bgImage={images.minorThreat.replace("/", "")}>
          </Slide>

          <Slide bgImage={images.badbrains.replace("/", "")} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              1996
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Cascading Style Sheets
            </Heading>
          </Slide>

          <Slide bgColor="hotpink">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              That's Punk
            </Heading>
          </Slide>

          <Slide bgImage={images.beatles.replace("/", "")} bgDarken={0.25} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              How things
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              were suppose to work
            </Heading>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              How they
            </Heading>
            <Text fit bold caps textColor="tertiary">actually worked</Text>
            <Appear>
              <Text fit bold caps textColor="tertiary">Spacer Gifs, Tables for Layout, Netscape, IE, IE for MAC, Hacks, Shims and Shivs.</Text>
            </Appear>
          </Slide>

          <Slide bgImage={images.tobin.replace("/", "")}>
          </Slide>

          <Slide bgImage={images.decendents.replace("/", "")}>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              What we created to solve the problem
            </Heading>
            <Appear>
              <Text fit bold caps textColor="tertiary">SASS, SCSS, LESS, Stylus</Text>
            </Appear>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Just add to the problem
            </Heading>
          </Slide>

          <Slide bgImage={images.talkingHeadsLamp.replace("/", "")} bgColor="primary" >
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              What can save us?
            </Heading>
          </Slide>


          <Slide  bgImage={images.devo.replace("/", "")} bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Post Punk?
            </Heading>
          </Slide>

          <Slide bgImage={images.sonicYouth2.replace("/", "")} bgColor="secondary" textColor="primary" bgDarken={0.5}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              PostCSS
            </Heading>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              PostCSS
            </Heading>
            <Heading size={4} fit caps lineHeight={1} textColor="white">
              What is it?
            </Heading>
          </Slide>

          <Slide bgColor="black">
            <BlockQuote>
              <Quote>PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.</Quote>
              <Cite>PostCSS Website</Cite>
            </BlockQuote>
          </Slide>

            <Slide bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              The Good
            </Heading>
            <Appear>
              <Heading size={4} lineHeight={1} textColor="white">
                and more...
              </Heading>
            </Appear>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              The Good
            </Heading>
            <List>
              <Appear>
                <ListItem>Automatic vendor prefixing</ListItem>
              </Appear>
              <Appear>
                <ListItem>Variables</ListItem>
              </Appear>
              <Appear>
                <ListItem>Nesting</ListItem>
              </Appear>
              <Appear>
                <ListItem>Color Conversions</ListItem>
              </Appear>
              <Appear>
                <ListItem>Uglify and Minify</ListItem>
              </Appear>
              <Appear>
                <ListItem>and more</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Isn't this just???
            </Heading>
            <Text fit bold caps textColor="tertiary">SASS, SCSS, LESS, Stylus</Text>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Kind of
            </Heading>
            <Text fit bold caps textColor="tertiary">The beauty is you go back</Text>
            <Text fit bold caps textColor="tertiary">to writing plain, old, Boring, CSS.</Text>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Future CSS
            </Heading>
            <Text fit bold caps textColor="tertiary">Variables, Custom properties, calc, </Text>
            <Text fit bold caps textColor="tertiary">media query ranges, Custom Selectors</Text>
            <Text fit bold caps textColor="tertiary">... and more!</Text>
          </Slide>

          <Slide bgColor="black">
            <BlockQuote>
              <Quote>Oh, btw—Bootstrap 4 will be in SCSS. And if you care, v5 will likely be in PostCSS because holy crap that sounds cool.</Quote>
              <Cite>Mark Otto - @mdo</Cite>
            </BlockQuote>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              The Bad
            </Heading>
            <List>
              <Appear>
                <ListItem>Yet another tool</ListItem>
              </Appear>
              <Appear>
                <ListItem>Dependencies, Dependencies, Dependencies</ListItem>
              </Appear>
              <Appear>
                <ListItem>Webpack</ListItem>
              </Appear>
              <Appear>
                <ListItem>Focus is on code and not the end product</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Is PostCSS the solution?
            </Heading>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Up Next
            </Heading>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              CSS Modules
            </Heading>
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">

            </Heading>
          </Slide>

          <Slide bgColor="primary">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code/css-modules-1.example")}
              margin="20px auto"
              textSize="30px;"
            />
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Local Scope
            </Heading>
          </Slide>

          <Slide
            bgColor="primary"
            notes="
              <ul>
                <li>talk about that</li>
                <li>and that</li>
              </ul>
            ">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code/css-modules-2.example")}
              margin="20px auto"
              textSize="30px;"
            />
          </Slide>

          <Slide
            bgColor="primary"
            notes="
              <ul>
                <li>talk about that</li>
                <li>and that</li>
              </ul>
            ">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code/css-modules-3.example")}
              margin="20px auto"
              textSize="30px;"
            />
          </Slide>

          <Slide
            bgColor="primary"
            notes="
              <ul>
                <li>talk about that</li>
                <li>and that</li>
              </ul>
            ">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code/css-modules-4.example")}
              margin="20px auto"
              textSize="30px;"
            />
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              This new feature + creative thinking
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              resulted in CSS Modules
            </Heading>
          </Slide>

          <Slide bgColor="black">
            <BlockQuote>
              <Quote>A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.</Quote>
            </BlockQuote>
          </Slide>

          <Slide
            bgColor="primary"
            notes="
              <ul>
                <li>talk about that</li>
                <li>and that</li>
              </ul>
            ">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code/css-modules-5.example")}
              margin="20px auto"
              textSize="30px;"
            />
          </Slide>

          <Slide
            bgColor="primary"
            notes="
              <ul>
                <li>talk about that</li>
                <li>and that</li>
              </ul>
            ">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code/css-modules-6.example")}
              margin="20px auto"
              textSize="30px;"
            />
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Composition
            </Heading>
          </Slide>

          <Slide
            bgColor="primary"
            notes="
              <ul>
                <li>talk about that</li>
                <li>and that</li>
              </ul>
            ">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code/css-modules-7.example")}
              margin="20px auto"
              textSize="30px;"
            />
          </Slide>

          <Slide
            bgColor="primary"
            notes="
              <ul>
                <li>talk about that</li>
                <li>and that</li>
              </ul>
            ">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/code/css-modules-8.example")}
              margin="20px auto"
              textSize="30px;"
            />
          </Slide>

          <Slide bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              The Good
            </Heading>
            <List>
              <Appear>
                <ListItem></ListItem>
              </Appear>
            </List>
          </Slide>


          <Slide bgColor="secondary" textColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              The Bad
            </Heading>
            <List>
              <Appear>
                <ListItem>Yet another tool</ListItem>
              </Appear>
              <Appear>
                <ListItem>Dependencies, Dependencies, Dependencies</ListItem>
              </Appear>
              <Appear>
                <ListItem>Webpack</ListItem>
              </Appear>
              <Appear>
                <ListItem>Focus is on code and not the end product</ListItem>
              </Appear>
            </List>
          </Slide>

          <Slide bgImage={images.joyDivision2.replace("/", "")} bgColor="secondary" textColor="primary" bgDarken={0.25}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Demo
            </Heading>
          </Slide>

          <Slide bgImage={images.joyDivision1.replace("/", "")} bgColor="secondary" textColor="primary" bgDarken={0.75}>
            <Heading size={1} fit caps lineHeight={1} textColor="white">
              Questions?
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
