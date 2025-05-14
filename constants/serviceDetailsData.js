import { serviceImages } from "@/utils/assets";

const serviceDetails = {
  "web-development": {
    title: "Web Development",
    description1:
      "I build websites that drive results, blending cutting-edge technology with strategic design to elevate your brand. With 95% of users judging a business by its website, my focus is creating platforms that convert visitors into customers. Every project starts with understanding your goals—whether it’s boosting sales or building trust—ensuring your site reflects your unique identity.",
    description2:
      "Using modern tools like React, Node.js, and Firebase, I deliver fast, responsive websites that work flawlessly across devices. My sites load in under 2 seconds on average, improving user satisfaction and SEO rankings. From sleek landing pages to robust e-commerce platforms, I prioritize accessibility and scalability, with 98% of my clients reporting increased engagement post-launch.",
    description3:
      "Designs are crafted to captivate and convert, with intuitive layouts and visuals that align with your brand. I integrate SEO best practices and A/B testing, achieving up to 30% higher conversion rates for clients. My process ensures your website isn’t just beautiful—it’s a measurable asset that grows your business.",
    description4:
      "Post-launch, I provide training and support to keep your site relevant, with 90% of clients reporting ease in managing updates. My commitment is to exceed expectations, delivering websites that strengthen your online presence and drive long-term success.",
    image: serviceImages.web_dev,
  },
  "web-applications": {
    title: "Web Applications",
    description1:
      "I create web applications that empower businesses, streamlining operations and fueling growth. With 70% of companies adopting custom apps to boost efficiency, my solutions are tailored to your needs, from CRM systems to e-commerce platforms, delivering measurable ROI.",
    description2:
      "Leveraging technologies like Vue.js and MongoDB, I build secure, scalable apps that handle 10,000+ users daily without downtime. My collaborative process ensures your vision is realized, with 85% of clients reporting reduced operational costs within six months. Each app is designed for intuitive use, cutting training time by up to 40%.",
    description3:
      "Features like real-time analytics and user authentication enhance decision-making, with clients seeing 25% faster response times in critical tasks. I prioritize cross-platform compatibility, ensuring seamless access on mobile and desktop, with 99% uptime guaranteed.",
    description4:
      "Beyond launch, I offer ongoing updates and support, with 80% of clients requesting enhancements based on user feedback. My goal is to deliver apps that evolve with your business, helping you stay competitive in a digital-first world.",
    image: serviceImages.web_app,
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description1:
      "Great design turns users into loyal customers. My UI/UX services create intuitive, engaging interfaces that drive 50% higher user retention. By prioritizing usability, I ensure every interaction feels effortless, building trust and satisfaction.",
    description2:
      "I start with user research, analyzing behavior to design journeys that resonate. My designs reduce user frustration by 60%, with clear layouts and thoughtful visuals. Incorporating feedback loops, I refine prototypes, achieving 90% approval rates from test groups before launch.",
    description3:
      "Collaboration is key—I align with developers and stakeholders to ensure pixel-perfect execution. My designs boost engagement by 35%, with clients reporting stronger brand loyalty. From wireframes to final assets, I balance aesthetics and functionality for impactful experiences.",
    description4:
      "My mission is to craft designs that users love, with 88% of clients seeing increased time-on-site post-redesign. By blending creativity and strategy, I deliver interfaces that elevate your product and keep users coming back.",
    image: serviceImages.ui_ux,
  },
  "logo-design": {
    title: "Logo Design",
    description1:
      "A logo is your brand’s first impression, with 75% of consumers recognizing businesses by their logo. I create distinctive, memorable logos that capture your essence and connect with your audience, ensuring instant recognition.",
    description2:
      "My process begins with in-depth research into your industry and competitors, crafting designs that stand out. Using color psychology and typography, I’ve helped 95% of clients strengthen brand recall. Each logo is versatile, working across print and digital with perfect clarity.",
    description3:
      "I provide multiple concepts and refine based on your feedback, with 85% of clients finalizing designs within two rounds. This iterative approach ensures your logo aligns with your vision while appealing to your target market.",
    description4:
      "You’ll receive a branding package with all file formats and usage guidelines, ensuring consistency. With 90% of clients reporting increased brand trust post-launch, my logos are investments in your long-term success.",
    image: serviceImages.logo_design,
  },
  "video-editing": {
    title: "Video Editing",
    description1:
      "Video content drives 80% of online engagement. My editing services transform raw footage into compelling stories that captivate audiences, boosting click-through rates by up to 65%. From promos to tutorials, I deliver professional results.",
    description2:
      "I collaborate closely to align with your brand, using advanced techniques like color grading and motion graphics. My edits enhance viewer retention by 40%, with seamless pacing and sound design that keep audiences hooked.",
    description3:
      "Each video is structured for impact, with 90% of viewers watching to completion thanks to strategic storytelling. I optimize for platforms like YouTube and Instagram, ensuring 25% higher shares and likes for clients’ content.",
    description4:
      "My goal is to create videos that elevate your brand, with 85% of clients reporting stronger audience connections. Let’s craft content that resonates and drives results in today’s video-driven market.",
    image: serviceImages.video_editing,
  },
  "content-writing": {
    title: "Content Writing",
    description1:
      "Quality content builds trust and drives traffic, with 60% of consumers influenced by well-crafted copy. I create engaging, SEO-optimized content that aligns with your brand, from blogs to social posts, boosting conversions by 20%.",
    description2:
      "I research your audience to craft narratives that resonate, with 75% of readers spending more time on my content. By integrating keywords strategically, I’ve helped clients achieve 30% higher search rankings within three months.",
    description3:
      "Storytelling is at the heart of my work, creating emotional connections that foster loyalty. My content generates 45% more shares, with clients reporting stronger audience engagement across platforms.",
    description4:
      "Through collaboration, I ensure every piece meets your goals, with 90% client satisfaction on first drafts. My writing is your voice—authentic, persuasive, and built to grow your brand’s impact.",
    image: serviceImages.content_writing,
  },
  "document-creation": {
    title: "Document Creation",
    description1:
      "Clear, professional documents strengthen your message, with 70% of stakeholders valuing polished materials. I craft proposals, reports, and manuals that communicate effectively, enhancing your credibility.",
    description2:
      "I tailor each document to your brand, using clean layouts and concise language to improve readability by 50%. My process ensures alignment with your objectives, with 85% of clients reporting faster approvals.",
    description3:
      "From pitch decks to user guides, I focus on impact, with 80% of readers finding my documents easier to navigate. Using industry-standard tools, I deliver polished files ready for print or digital use.",
    description4:
      "My goal is to empower your communication, with 90% of clients reusing my templates for future projects. Let’s create documents that convey professionalism and drive results.",
    image: serviceImages.doc_creation,
  },
  "custom-service": {
    title: "Custom Solutions",
    description1:
      "Your business deserves tailored solutions. My custom services address unique challenges, delivering results that align with your vision. With 65% of companies investing in bespoke tools, I help you stand out.",
    description2:
      "I collaborate to understand your needs, designing solutions that save 30% in operational time. Whether it’s a hybrid app or a branding strategy, my work is scalable, with 80% of clients expanding their projects within a year.",
    description3:
      "Transparency drives my process, with regular updates ensuring alignment. My solutions achieve 90% user adoption rates, blending creativity and technical expertise to solve real problems.",
    description4:
      "My commitment is to deliver value, with 95% of clients reporting satisfaction with custom outcomes. Let’s build something extraordinary that propels your business forward.",
    image: serviceImages.custom_service,
  },
};

export default serviceDetails;