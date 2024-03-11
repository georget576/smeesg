import Image from "next/image";
import { Inter } from "next/font/google";
import Countdown from "./components/Countdown"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`bg-green-800 flex min-h-screen flex-col justify-top px-10 py-10 lg:justify-center lg:px-72`}
    >
      <div className="text-orange-400 text-sm tracking-widest">CREATED BY CHANGEMAKERS FOR CHANGEMAKERS</div>
      <div className="text-white text-3xl py-10 lg:text-5xl">ESG Festival:<br></br>Sustainably United<br></br>A Festival for Change</div>
      <div className="text-white text-regular pb-10 lg:text-3xl">Date: 5th & 6th June 2024<br></br>Time: 10am to 5pm<br></br>Venue: Wawasan Open University</div>
      <div className="pb-3"><Countdown/></div>
      <div className="lg:mx-52 inline-block rounded border border-orange-600 bg-orange-600 px-12 py-5 text-sm font-medium text-center text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-white"
>
  Register
</div>

<div className="text-orange-400 text-sm tracking-widest pt-20">EVENT THEME</div>
<div className="text-white text-3xl py-10 lg:text-6xl">Why Wait? <br></br>Grab Your Ticket Now!</div>
<div className="text-white text-regular pb-5">Step into a realm of transformation at Sustainably United, where CHANGE takes the
centre stage, and businesses unite to <strong>TAKE ACTION.</strong> This is not just an event; it's a
rallying cry for businesses to embrace sustainability in line with the United Nations
Sustainable Development Goals.<br></br><br></br>Let's amplify awareness, foster collaboration, and equip Malaysian businesses with
the tools to make a lasting impact on our shared future.<br></br><br></br>Join the ESG community to raise awareness, empower sustainability, facilitate
industry collaborations and inspire <strong>ACTION!</strong><br></br><br></br>Walk away from this 2-day jam packed action focused ESG festival, where
you can connect with like-minded individuals, share your newfound
eco-expertise and how ESG can positively impact your business in various
unimaginable ways, and maybe even make plans for your next sustainable
adventure.</div>
<div className="lg:mx-52 inline-block rounded border border-orange-600 bg-orange-600 px-12 py-3 text-sm font-medium text-center text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-white"
>
  Act Now!
</div>

<div className="text-orange-400 text-sm tracking-widest pt-20">BUDDY PRICE</div>
<div className="text-white text-3xl py-10 lg:text-6xl">Cheap Cheap Only...</div>
<div className="text-white text-regular">You are not just attending and gather at an event, you're investing
in a transformative experience that will leave you inspired,
informed, and equipped to drive positive change in your
professional and personal spheres. This is a convergence of
visionaries, thought leaders, and change-makers who are
rewriting the narrative of ESG responsibility.
<div/>
<div className="text-white text-regular pt-5">
Early Bird Gets the Sustainable Worm: Secure your spot, and
be part of an event that's not just memorable but
planet-positive. Don’t miss out on the greenest party in town!
<br></br>
<br></br>
Early Bird Ticket Price:
<br></br>
Day Ticket: RM288
<br></br>
Both Days Ticket: RM500
<br></br>
Workshops & Masterclasses: RM200 / Workshops
<br></br>
VIP Roundtable: RM350
<br></br>
<br></br>
In addition to the above, What other Perks is
included in the ticket price?

<ul className="list-disc">
  <br></br>
  <li className="mx-10">F&B Included: 1 Lunch and 2 tea breaks</li>
  <li className="mx-10">Lucky Draw worth up to RM10K</li>
  <li className="mx-10">Pipeline Growth and Brand Exposure</li>
  <li className="mx-10">Connect & Network with likeminded people, experts, businesses and cultivate strategic partnerships</li>
  <li className="mx-10">Unlimited viewing of Leng Zais and Leng Luis</li>
</ul>
</div>
</div>

<div className="text-orange-400 text-sm tracking-widest pt-20">EXPERTS CIRCLE</div>
<div className="text-white text-3xl py-10 lg:text-6xl">Speakers Corner</div>
<div className="text-white text-regular">Don't be fooled by their fancy suit and professional looks, our speakers and experts are leaders
in this space, not only they can lead intelligent conversations, but they are also keen to have fun
and interesting conversations that is beyond the ESG realm.
<br></br>
<br></br>
Come meet them at the event, learn new insights, tips and techniques in bringing your business
to a new height leveraging ESG benefits.
<br></br>
<br></br>
We can assure you will walk away with a lot of "Wow" factors.
</div>
<div className="flex flex-col lg:flex-row gap-10 justify-center py-10 text-white mx-10 lg:justify-between">
 <div className="text-xl text-center">
  <div className="rounded-full bg-orange-600 py-10 w-60 h-60"></div>Name <br></br> Position <br></br> Company</div>
  <div className="text-xl text-center">
  <div className="rounded-full bg-orange-600 py-10 w-60 h-60"></div>Name<br></br> Position <br></br> Company</div>
  <div className="text-xl text-center">
  <div className="rounded-full bg-orange-600 py-10 w-60 h-60"></div>Name<br></br> Position <br></br> Company</div>
</div>

<div className="text-orange-400 text-sm tracking-widest pt-20">WORKSHOPS & MASTERCLASSES</div>
<div className="text-white text-3xl py-10 lg:text-6xl">Enjoy Working in Groups?</div>
<div className="text-white text-regular">Welcome, eco-enthusiasts, sustainability superheroes and governance police! Get
ready to embark on an ESG adventure like never before at our Fun and Fabulous
workshops and masterclasses. We're here to turn your enthusiasm for ESG
(Environmental, Social, and Governance) into a full-blown eco-celebration!</div>
<div className="flex flex-col lg:flex-row justify-center gap-5">
  <div className="text-white text-regular pt-10"><strong>Day 1</strong> <br></br>
  <ul className="list-disc">
  <br></br>
  <li className="mx-10"><strong>Natural Capital Accounting:</strong> Aiding in better informed business strategies</li>
  <li className="mx-10"><strong>Carbon Neutrality Roadmap:</strong></li>
  <li className="mx-10">How is Carbon Taxes affecting
your P&L?</li>
  <li className="mx-10"><strong>Circular Economy:</strong> Raise the
bar on resource and
operational efficiency</li>
</ul>
  </div>
  <div className="text-white text-regular pt-10"><strong>Day 2</strong> <br></br>
  <ul className="list-disc">
  <br></br>
  <li className="mx-10"><strong>Growth Mindset:</strong> Sustainable
Leadership
business strategies</li>
  <li className="mx-10"><strong>DEI in the Workplace:</strong> Are you
Implementing equitable hiring
practices and reducing
unconscious biases.</li>
  <li className="mx-10"><strong>The Future of Work</strong></li>
</ul>
  </div>
  <div className="text-white text-regular pt-10"><strong>Day 2</strong> <br></br>
  <ul className="list-disc">
  <br></br>
  <li className="mx-10"><strong>Effective ESG Reporting Frameworks</strong></li>
  <li className="mx-10"><strong>Cybersecurity and Data
Governance:</strong> What is Malaysia
doing in preparation for the AI
wave?</li>
  <li className="mx-10">The Future of Work</li>
</ul>
  </div>
</div>

<div className="text-orange-400 text-sm tracking-widest pt-20">VIP ROUNDTABLE </div>
<div className="text-white text-3xl py-10 lg:text-6xl">Prefer VIP Exclusive Sessions with Experts?</div>
<div className="text-white text-regular">Buckle up for a ride on the eco-express as our VIP Roundtable takes you through the
twists and turns of Green Financing. Get ready for insights, laughter, and maybe a few
serious discussions as we explore the financial landscape where profits grow like bamboo
shoots, and sustainability is the new currency.</div>
<div className="flex flex-col lg:flex-row justify-center gap-5">
  <div className="text-white text-regular pt-10"><strong>Day 1: Green Financing</strong> <br></br>
  <p>Analyzing emerging financial models and investment
opportunities in the Green financing sector, including
the role of public-private partnerships, and
discussing the integration of social responsibility into
investment portfolios, focusing on projects that
address social challenges while providing financial
returns.</p>
  </div>
  <div className="text-white text-regular pt-10"><strong>Day 2: Green Technology Adoption</strong> <br></br>
  <p>Examining the financial implications of integrating
green technologies, such as renewable energy
sources, sustainable supply chain solutions, and
eco-friendly manufacturing processes.
Discussing success stories and challenges faced by
businesses in adopting and implementing green
technologies.</p>
  </div>
</div>
<div className="flex flex-col justify center mx-10 lg:flex-row gap-10 lg:justify-between py-10 text-white">
 <div className="text-xl text-center">
  <div className="rounded-full bg-orange-600 py-10 w-60 h-60"></div>Name <br></br> Company <br></br> Date/Time</div>
  <div className="text-xl text-center">
  <div className="rounded-full bg-orange-600 py-10 w-60 h-60"></div>Name <br></br> Company <br></br> Date/Time</div>
  <div className="text-xl text-center">
  <div className="rounded-full bg-orange-600 py-10 w-60 h-60"></div>Name <br></br> Company <br></br> Date/Time</div>
</div>

<div className="text-orange-400 text-sm tracking-widest pt-20">PROGRAM AGENDA</div>

<div className="text-white text-3xl py-10 lg:text-6xl">Day 1: Environmental</div>
<h1 className="text-xl text-white">Our ESG rockstars will be dropping knowledge bombs like confetti.
Get ready to have your mind blown by the brains behind the green
revolution.</h1>
<p className="text-regular text-white pt-5">Delve into all the interesting environmental discussions and debates
from the experts, including new policies that are in place, that might
affect your businesss' triple bottom line.</p>
<div className="flex flex-col lg:flex-row justify-between gap-20">
  <div className="text-white text-regular pt-5">
  <ul className="list-disc">
  <br></br>
  <li className="lg:mx-10"><strong>Opening Keynote: Igniting Conversations</strong></li>
  <li className="lg:mx-10"><strong>Sponsors Acknowledgement</strong></li>
   <li className="lg:mx-10"><strong>Panel 1: The Green Revolution - Innovations in Sustainable
Technologies</strong> <p className="text-regular text-white">Explore cutting-edge technologies and innovations that are
reshaping industries for a more sustainable future.</p>
</li>
<li className="lg:mx-10"><strong>Panel 2: Beyond Carbon - Strategies for Decarbonization
Technologies</strong> <p className="text-regular text-white">Delve into practical strategies for businesses to reduce and offset
carbon emissions, featuring success stories and challenges.</p>
</li>
</ul>
<p className="text-regular text-white font-bold lg:px-10 py-5">Green Luncheon and Mingle</p>
<p className="text-regular text-white font-bold lg:px-10 pt-2">Presentation: Quick Takes on Environmental Initiatives</p>
<p className="text-regular text-white lg:px-10 pt-2">Rapid-fire presentations showcasing impactful environmental initiatives from various organizations.</p>
<p className="text-regular text-white font-bold lg:px-10 pt-2">Fireside Chat: From Grassroots to Global Impact</p>
<p className="text-regular text-white lg:px-10 pt-2">Conversations with a prominent environmental activist on the role of grassroots movements in driving change.</p>
<p className="text-regular text-white font-bold lg:px-10 pt-2">Debate: Balancing Profit and Purpose</p>
<p className="text-regular text-white lg:px-10 pt-2">Engage in a lively debate on whether businesses can trulybalance profit and purpose, exploring different perspectives.</p>
<p className="text-regular text-white font-bold lg:px-10 pt-2">Closing Keynote: The Path Forward</p>
  </div>
</div>
<div className="text-white text-3xl py-10 lg:text-6xl">Day 2: Social & Governance</div>
<h1 className="text-xl text-white">Kick off the conference with an engaging icebreaker activity to set a
positive and collaborative tone for the event on second day to boost
engagement and spirit!</h1>

<div className="flex flex-col lg:flex-row justify-center gap-5 ">
  <div className="text-white text-regular pt-5">
 
<p className="text-regular text-white font-bold lg:px-10 pt-5">Opening Keynote: The Human Side of ESG</p>
<p className="text-regular text-white lg:px-10 pt-2">Explore the social aspects of ESG with a dynamic keynote speaker who
delves into the importance of human capital, diversity, and inclusion in
driving sustainable business practices.</p>
<p className="text-regular text-white lg:px-10 pt-2">Panel: Cultivating Inclusive Cultures and Boardroom Diversity</p>
<p className="text-regular text-white lg:px-10 pt-2">How Tech giants / multinational companies are pushing the DEI wave
and delve into the importance of diversity in corporate boards,
discussing its impact on decision-making and corporate governance.</p>
<p className="text-regular text-white font-bold lg:px-10 pt-2">Presentation: Ethical Leadership in the Digital Age</p>
<p className="text-regular text-white lg:px-10 pt-2">Gain insights into the role of ethical leadership in the age of technology
and digital transformation.</p>
<p className="text-regular text-white font-bold lg:px-10 py-5">Green Luncheon and Mingle</p>
<p className="text-regular text-white font-bold lg:px-10 pt-2">Panel: Navigating the Green Governance Landscape</p>
<p className="text-regular text-white lg:px-10 pt-2">A dynamic presentation by a renowned expert providing insights into the
evolving world of governance in the context of ESG. Expect a captivating overview of emerging trends and challenges.
and digital transformation.</p>
<p className="text-regular text-white font-bold lg:px-10 pt-2">Fireside Chat: In the Hot Seat - CEOs Discuss Sustainable
Governance</p>
<p className="text-regular text-white lg:px-10 pt-2">An intimate conversation with CEOs who have successfully navigated the
challenges of integrating sustainability into their governance structures.
Learn firsthand how they lead their organizations towards a more
sustainable future.</p>
<p className="text-regular text-white font-bold lg:px-10 pt-2">Panel: Beyond Compliance: From Shareholders to Stakeholders</p>
<p className="text-regular text-white lg:px-10 pt-2">Explore the paradigm shift from shareholder to stakeholder governance models. Industry leaders and governance visionaries discuss the practicalities, benefits, and challenges of embracing a stakeholder-centric approach and digital transformation.</p>
<p className="text-regular text-white font-bold lg:px-10 pt-2">Closing Keynote: The Next Frontier - Future Trends in ESG</p>
<p className="text-regular text-white lg:px-10 pt-2">Witness a spirited debate among futurists, industry leaders, and disruptors
as they predict and discuss the next big trends in ESG governance. This
session serves as a stimulating conclusion, leaving attendees with a
forward-looking perspective on the governance landscape.
</p>
<p className="text-regular text-white lg:px-10 pt-2">*Efforstly reserves the rights to update the topics before the event date</p>
  </div>
</div>
    </main>
  );
}

    