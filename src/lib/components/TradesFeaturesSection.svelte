<script>
  /* ════════════════════════════════════════════════════════════════
     ClearSky — Trades section #3 · "Features that move the Revenue Needle"

     White band · padding 40 top / 60 bottom · 1200/1140 grid
     (deliberate per-section override; the rest of the site is 1440/1380).
     Four category rows (Discovery, Engagement, Conversion, Growth), each a
     left-aligned label + a row of 5 clickable feature tiles. Clicking a
     tile opens a modal: hero video thumbnail, two CTAs (Ask our AI /
     15 Minute Consult), and body copy.

     ── HERO TREATMENTS ────────────────────────────────────────────
     titleBar: a string renders a dark title bar on the hero (photos with
       no baked-in title); null = no bar (art already carries its title).
     play: true overlays a play button; false = the art already has one.

     ── ASSETS (drop into /images/features/) ───────────────────────
     Icons are the 88px chip glyphs; heroes are the modal video thumbnails.
     Local SEO              icon: image_215.jpg                              hero: image_216.jpg
     Content Radar          icon: Rectangle_28679.jpg                        hero: Group_1000006136.jpg
     Lead Grabber           icon: Rectangle_28686.jpg                        hero: ChatGPT_Image_Jun_20__2026__01_11_42_PM.png
     Ai Optimization        icon: Rectangle_28687.jpg                        hero: a9b70053-7cc4-4899-9353-d9297d440820.png
     Reviews                icon: Rectangle_28699.jpg                        hero: image_201.jpg
     ViewRoom               icon: Group_1000006038__1_.jpg                   hero: Rectangle_29019.jpg
     Ai Assistant           icon: Rectangle_28716.jpg                        hero: image_199.jpg
     Video/Audio            icon: Generated_Image_June_21__2026_-_10_53AM_1.jpg hero: 6203cf0f-ea3c-48ce-b0e4-870fedb073d7.png
     Ai Visualizer          icon: Rectangle_28731.jpg                        hero: image_202.png
     FotoJobber             icon: ChatGPT_Image_Jun_21__2026__02_38_27_PM_1.jpg hero: Rectangle_28730.jpg
     Marketing              icon: Rectangle_28770.jpg                        hero: 1782326905108_Group_1000006043_1.jpg
     Communication Hub      icon: Rectangle_28774.jpg                        hero: Rectangle_28769.jpg
     Business Intelligence  icon: Rectangle_28776.jpg                        hero: Rectangle_28775.jpg
     Conversational AI      icon: Rectangle_28779.jpg                        hero: Rectangle_28778.jpg
     Social Media           icon: Rectangle_28781.jpg                        hero: ChatGPT_Image_Jun_21__2026__05_10_37_PM_1.jpg
     Call Tracking          icon: Rectangle_28805.jpg                        hero: Rectangle_28793.jpg
     Dedicated Support      icon: Rectangle_28804.jpg                        hero: ChatGPT_Image_Jun_21__2026__06_01_04_PM.png
     Competitor Analysis    icon: Rectangle_28802.jpg                        hero: Rectangle_28795.jpg
     Reporting              icon: Rectangle_28801.jpg                        hero: Rectangle_28796.jpg
     Network                icon: Rectangle_28803.jpg                        hero: Rectangle_28797.jpg
     ════════════════════════════════════════════════════════════════ */

  export let title = 'Features that move the Revenue Needle for Trades';

  export let categories = [
    { name: 'Discovery', items: [{ label: 'Local SEO', icon: '/images/features/icon-local-seo.jpg' }, { label: 'Content Radar', icon: '/images/features/icon-content-radar.jpg' }, { label: 'Lead Grabber', icon: '/images/features/icon-lead-grabber.jpg' }, { label: 'Ai Optimization', icon: '/images/features/icon-ai-optimization.jpg' }, { label: 'Reviews', icon: '/images/features/icon-reviews.jpg' }] },
    { name: 'Engagement', items: [{ label: 'ViewRoom', icon: '/images/features/icon-viewroom.jpg' }, { label: 'Ai Assistant', icon: '/images/features/icon-ai-assistant.jpg' }, { label: 'Video/Audio', icon: '/images/features/icon-video-audio.jpg' }, { label: 'Ai Visualizer', icon: '/images/features/icon-ai-visualizer.jpg' }, { label: 'FotoJobber', icon: '/images/features/icon-fotojobber.jpg' }] },
    { name: 'Conversion', items: [{ label: 'Marketing', icon: '/images/features/icon-marketing.jpg' }, { label: 'Communication Hub', icon: '/images/features/icon-communication-hub.jpg' }, { label: 'Business Intelligence', icon: '/images/features/icon-business-intelligence.jpg' }, { label: 'Conversational AI', icon: '/images/features/icon-conversational-ai.jpg' }, { label: 'Social Media', icon: '/images/features/icon-social-media.jpg' }] },
    { name: 'Growth', items: [{ label: 'Call Tracking', icon: '/images/features/icon-call-tracking.jpg' }, { label: 'Dedicated Support', icon: '/images/features/icon-dedicated-support.jpg' }, { label: 'Competitor Analysis', icon: '/images/features/icon-competitor-analysis.jpg' }, { label: 'Reporting', icon: '/images/features/icon-reporting.jpg' }, { label: 'Network', icon: '/images/features/icon-network.jpg' }] }
  ];

  export let modals = {
    'Local SEO': {
      hero: '/images/features/hero-local-seo.jpg',
      titleBar: 'What is Local SEO',
      play: true,
      heroW: 470,
      videoHref: 'https://youtube.com/shorts/1HdpTUrSQ30',
      paras: [
        'For trades local visibility is revenue. When people need a contractor, they hire whoever ranks first in their area.',
        'That’s why a ClearSky client never tackles local SEO alone. As a client of ours we map your local market using our ranking grid tool—revealing exactly where you dominate and where competitors are stealing your leads.',
        'Our team uses this map to build a targeted action plan, optimizing your Google Business Profile, service-area content, and reviews.',
        'Our tool pinpoints the gaps, and our team turns that data into action. We don’t just hand you a report—we actively partner with you to ensure you capture your local market.'
      ]
    },
    'Content Radar': {
      hero: '/images/features/hero-content-radar.jpg',
      titleBar: null,
      play: true,
      heroW: 510,
      videoHref: 'https://youtu.be/BB7FlkQ4KFg',
      paras: [
        'Content is the entire game — it’s how customers find you, judge you, and decide. The hard part isn’t producing content; it’s knowing which content actually drives business.',
        'ContentRadar answers that by watching the hundreds of the best operators in your market and tracking what works for them: the blogs that rank, the questions customers keep asking, the videos and social posts pulling real engagement, the paid campaigns and keywords converting.',
        'The needle-movers reveal themselves through proven performance, not guesswork. Then you use exactly that — their winning topics, questions, and offers, adapted to your business. Evidence-based content, not opinions.'
      ]
    },
    'Lead Grabber': {
      hero: '/images/features/hero-lead-grabber.png',
      titleBar: null,
      play: false,
      heroW: 500,
      videoHref: 'https://youtube.com/shorts/SwQXj4TbfSE',
      paras: [
        'Speed is everything in conversion — a lead that waits goes cold fast, and most businesses lose deals simply by answering too late.',
        'Our Lead Grabber closes that gap. The moment a visitor leaves their number, it’s texted straight to the owner through your A2P line, ready to answer by text or call in seconds. But it doesn’t rely on memory.',
        'An AI agent watches every conversation: if the owner hasn’t responded in ten minutes, it sends a reminder; at twenty, it escalates to second-in-command. No lead is forgotten, no opportunity slips. You capture interest at its peak — and convert it.'
      ]
    },
    'Ai Optimization': {
      hero: '/images/features/hero-ai-optimization.png',
      titleBar: null,
      play: false,
      heroW: 500,
      videoHref: 'https://youtu.be/2AQJsCCKP3M',
      paras: [
        'Traditional search is dying. Users aren’t clicking links anymore; they are asking AI directly. If your business isn’t surfacing in these conversational answers, you are invisible to a rapidly growing market.',
        'Our AI Optimization platform reveals your true AI “share of voice.” We audit major LLMs to see if they recommend your business, ignore it, or misrepresent it.',
        'By validating this against third-party data, we capture the critical intelligence needed to protect your brand authority, correct AI biases, and proactively optimize your content.',
        'The internet is shifting from “searching for links” to “asking an AI.” We ensure you are the answer.'
      ]
    },
    'Reviews': {
      hero: '/images/features/hero-reviews.jpg',
      titleBar: 'Reviews',
      play: true,
      heroW: 470,
      videoHref: 'https://youtu.be/23SxfEMZkso',
      paras: [
        'A single unanswered negative review costs you more than you think. It drops your local search ranking, signals indifference to every future customer reading it, and hands the job to your competitor.',
        'ClearSky’s Review Platform captures every Google Business Profile review the moment it lands — running it through a seven-step identification process before AI reads the sentiment, flags complaints, surfaces opportunities, and generates a suggested response.',
        'Low ratings trigger instant escalation to management. No response within an hour? An automatic reminder goes out. Four hours without a reply? It reaches your second in command.',
        'Because in local search, your reputation isn’t built in years. It’s won or lost — review by review.'
      ]
    },
    'ViewRoom': {
      hero: '/images/features/hero-viewroom.jpg',
      titleBar: null,
      play: false,
      heroW: 480,
      videoHref: 'https://youtu.be/npW8m-Bldeg',
      embedUrl: 'http://localhost:3005/room/cmt0236wc0003xqoigar5z2ep/embed',
      paras: [
        'ViewRoom is a live virtual showroom embedded directly into your webpage — and it knows more about your visitor than any sales rep walking a show floor ever could.',
        'Before the rep enters, they’re briefed: which videos the visitor watched, which questions they asked the AI, how long they stayed.',
        'Two cameras on the rep’s mobile app mean they can demonstrate products hands-on while staying face to face.',
        'The host controls the room — inviting reps, specialists, or colleagues as needed. No downloads. No friction. Just a deeply informed, live product conversation happening at the exact moment your customer is most ready to act.'
      ]
    },
    'Ai Assistant': {
      hero: '/images/features/hero-ai-assistant.jpg',
      titleBar: 'AI Assistant',
      play: true,
      heroW: 470,
      videoHref: 'https://youtube.com/shorts/4G9B0yY5NW4',
      paras: [
        'Not all AI responses are equal — and ClearSky’s AI Assistant is built to know the difference.',
        'Live customer questions on your webpage or in ViewRoom are answered instantly, within guardrails you set, with no human delay.',
        'The AI already knows who it’s talking to — their history, their questions, their intent — because it’s connected to the Intelligence Layer before the conversation starts.',
        'But when AI is asked to interpret something more complex — a negative review, a customer email, a voice recording — it doesn’t act alone.',
        'A seven-step process reads the input, generates a suggested response, and routes it through human approval before a single word reaches your customer. Speed where it counts. Oversight where it matters.'
      ]
    },
    'Video/Audio': {
      hero: '/images/features/hero-video-audio.png',
      titleBar: 'Video / Audio',
      play: false,
      heroW: 510,
      videoHref: 'https://youtu.be/SMidISs57H8',
      paras: [
        'AI video and image tools let small businesses produce scroll-stopping content without studio budgets. What once required a crew, equipment, and thousands of dollars can now be generated in minutes for a fraction of the cost.',
        'That means more frequent posting, more A/B testing, and fresh visuals tailored to each platform—all proven drivers of engagement. Small teams can finally compete with bigger brands on production quality while keeping spend lean. Just as important: this sector is moving at breakneck speed.',
        'Models that felt experimental a year ago now produce broadcast-quality footage with synchronized audio, and capabilities jump every few months.',
        'Businesses that adopt early build a real edge, while those who wait risk falling behind competitors already turning AI content into measurable growth.'
      ]
    },
    'Ai Visualizer': {
      hero: '/images/features/hero-ai-visualizer.png',
      titleBar: 'AI Visualizer',
      play: true,
      heroW: 470,
      videoHref: 'https://youtu.be/wqY2-U11Qa4',
      paras: [
        'Our AI Visualizer transforms how homeowners and designers reimagine residential exteriors. Upload a photo of any house, select a region, and instantly preview realistic modifications: swap doors and windows, add a dormer, or extend the structure with an additional floor.',
        'Powered by advanced image segmentation and generative inpainting, the tool blends new elements seamlessly into the original photo while preserving lighting, perspective, and architectural style.',
        'Select from a curated catalog of doors, windows, rooflines, and finishes, then visualize each option in seconds.',
        'Whether exploring a renovation, planning an addition, or presenting concepts to clients, our AI Visualizer turns imagination into a photorealistic preview—no design software, no guesswork.',
        'See the possibilities before committing to a single change.'
      ]
    },
    'FotoJobber': {
      hero: '/images/features/hero-fotojobber.jpg',
      titleBar: 'FotoJobber',
      play: false,
      heroW: 470,
      videoHref: 'https://youtube.com/shorts/GjHzDZY1pVU',
      paras: [
        'FotoJobber lets a homeowner skip the call-out visit entirely. Take a photo of the problem — a leaking tap, a tired bathroom, a cracked pipe — circle the spot, add a quick note about what you want done, and send it.',
        'A licensed contractor reviews it and sends back an accurate quote within two hours.',
        'For homeowners, it’s faster and easier: no waiting around for an appointment just to get a price, and no surprise charges. You get a real number from a real tradesperson on your schedule.',
        'For the contractor, every submission arrives as a precise visual brief — they see exactly what they’re dealing with before quoting, which means tighter pricing, fewer wasted site visits, and a ready-to-book job already in hand.'
      ]
    },
    'Marketing': {
      hero: '/images/features/hero-marketing.jpg',
      titleBar: null,
      play: true,
      heroW: 510,
      videoHref: 'https://youtu.be/_5L2QZnLvNA',
      paras: [
        'ClearSky builds your pipeline before a customer picks up the phone. ContentRadar monitors what homeowners in your market are actively searching for — surfacing trending demand in your trade so your content is visible when intent is highest.',
        'Every visitor to your site is scored in real time, classified by intent, and served a page calibrated to where they are in their decision. The person researching a water heater in January gets nurtured through the winter and converted in March.',
        'A persona layer reads age, property type, and urgency from behaviour — changing your message without changing your voice.',
        'Every booked job traces back to the exact keyword and ad that started the journey. You see what paid advertising is actually worth, not just what it cost. One platform. One protected market. Built for the trade you run.'
      ]
    },
    'Communication Hub': {
      hero: '/images/features/hero-communication-hub.jpg',
      titleBar: null,
      play: false,
      heroW: 480,
      videoHref: 'https://youtu.be/oXE3-UcclCU',
      paras: [
        'Every call, text, email, and form submission flows into a single communication hub — a unified record that knows who the contact is, what they have asked before, and what they are most likely to need next.',
        'Every conversation connects to a live profile. As interactions accumulate, the engagement score reflects the real level of intent — a customer who calls, returns to the website, and opens a follow-up message is scored differently than someone who browsed once and left.',
        'When a customer calls, their identity resolves in under 400 milliseconds before a rep says hello. When a voicemail comes in at 11pm, AI extracts the service, the urgency, and the name — and a brief is waiting in the morning.',
        'Every outbound message is queued for rep approval before it sends. Nothing fires automatically. The system keeps every relationship visible, scored, and ready to act on.'
      ]
    },
    'Business Intelligence': {
      hero: '/images/features/hero-business-intelligence.jpg',
      titleBar: null,
      play: false,
      heroW: 480,
      videoHref: 'https://youtu.be/Hp7tqzCCb_4',
      paras: [
        'A contractor, electrician, or HVAC contractor does not have time to manage leads. They are on the tools all day and cannot monitor who is visiting their website or why.',
        'ClearSky watches every visitor in real time, classifies their intent — researching, comparing quotes, ready to book, or emergency — and adapts the website to match before the visitor has scrolled past the fold.',
        'The deeper value is what the platform learns over time. Every interaction builds a picture of what questions are being asked in the market, what objections are stalling conversions, and what content is actually driving booked jobs.',
        'The support team knows what each customer cared about before they called. But no single trades business generates enough data on its own to see those patterns clearly. ClearSky solves that through its network of trades clients across Northern Ontario — pooling anonymised behavioural signals across every market so the intelligence is sharper than any one contractor could produce alone. Because every client operates in a protected market, that data sharing carries no risk. You are learning from peers in small cities across the country, not arming the plumber down the street.'
      ]
    },
    'Conversational AI': {
      hero: '/images/features/hero-conversational-ai.jpg',
      titleBar: null,
      play: false,
      heroW: 480,
      videoHref: 'https://youtube.com/shorts/MlDIkojKL3o',
      paras: [
        'When a homeowner calls about a plumbing emergency at 2am, ClearSky’s conversational AI is already loaded with their profile, intent bucket, and site history before the first word is spoken.',
        'The IVR does not route blindly — it responds intelligently, confirms the problem, sets arrival expectations, and qualifies the job while the rep is being notified. The communication hub holds the customer engaged so the job is never lost to a slow response.',
        'Agentic AI takes the next step — it reads the conversation, updates the profile, schedules the callback, and hands the rep a complete briefing with a recommended action.',
        'The contractor arrives informed, not starting from zero.'
      ]
    },
    'Social Media': {
      hero: '/images/features/hero-social-media.jpg',
      titleBar: null,
      play: false,
      heroW: 480,
      videoHref: 'https://youtu.be/z9eTDw2XxrI',
      paras: [
        'Every visitor who reaches the comparison stage of their decision is not looking for more information — they are looking for permission to choose you over the alternative. Social proof is what gives them that permission. ClearSky monitors review velocity, job counts, response times, and gallery freshness as active signals, not static content. When the platform detects a visitor in the Comparison bucket, the proof block adapts — surfacing the most relevant credentials, the most recent work, and the strongest trust signals for that specific visitor’s property type, location, and concern. A homeowner researching a bathroom renovation sees something different than a landlord managing a rental emergency. The network amplifies this further — anonymized review patterns across the peer group reveal which proof signals are actually converting in the current market, not which ones the business assumes are working.'
      ]
    },
    'Call Tracking': {
      hero: '/images/features/hero-call-tracking.jpg',
      titleBar: null,
      play: false,
      heroW: 470,
      videoHref: 'https://youtu.be/jdvuFkF2PNo',
      paras: [
        'Not every customer starts online. A print ad in the Daily Press, a Google Business Profile listing, a Facebook post, and a job site sign can all generate a phone call — and without call tracking, every one of those calls looks identical.',
        'ClearSky assigns a unique digital number to every channel. The moment a call comes in, the platform knows exactly which channel, which campaign, and which placement generated it. That attribution data flows directly into the business intelligence engine — enriching the customer profile, informing budget decisions, and revealing which channels are actually driving revenue versus which ones are just generating noise.',
        'Stop guessing where your best customers come from. Start investing in the channels you can prove are working.'
      ]
    },
    'Dedicated Support': {
      hero: '/images/features/hero-dedicated-support.png',
      titleBar: null,
      play: false,
      heroW: 480,
      videoHref: 'https://youtube.com/shorts/NeqN7UEUG6E',
      paras: [
        'Running a business means every hour spent managing technology, chasing leads, and interpreting data is an hour not spent on the tools, with clients, or growing the operation.',
        'ClearSky includes four hours of dedicated human support every month — not a help desk, not a ticket queue, but a knowledgeable partner who understands your market, your platform, and your growth targets.',
        'Because ClearSky automates everything that can be automated — intent classification, content adaptation, persona inference, communication sequences, market intelligence, and performance monitoring — those four hours carry the weight of sixteen. The platform has already done the work.',
        'The support partner arrives with everything interpreted, flagged, and ready for a decision. ContentRadar flags get actioned. Review responses get approved. Growth opportunities get identified.',
        'Four hours in. Sixteen hours of equivalent output. Nothing falls through the cracks.'
      ]
    },
    'Competitor Analysis': {
      hero: '/images/features/hero-competitor-analysis.jpg',
      titleBar: null,
      play: false,
      heroW: 470,
      videoHref: 'https://youtu.be/HGuX_OT6JaE',
      paras: [
        'Your competitor is not standing still. They are optimising their Google Business Profile, accumulating reviews, climbing local search rankings, and increasingly showing up in AI-generated answers before your business does.',
        'ClearSky monitors the competitive landscape across every channel that matters. We track local search ranking movements — yours and theirs.',
        'GBP rating and review velocity reveals whether a competitor is pulling ahead in the trust signals that convert Comparison bucket visitors. AI sentiment analysis monitors how your business and your competitors are being characterized in AI-generated answers, review summaries, and search overviews.',
        'ContentRadar identifies the questions your market is asking that your competitor is already answering. Every gap is an opportunity. Every signal is actionable.',
        'ClearSky ensures you see the competitive picture clearly, continuously, and early enough to do something about it.'
      ]
    },
    'Reporting': {
      hero: '/images/features/hero-reporting.jpg',
      titleBar: null,
      play: false,
      heroW: 470,
      videoHref: 'https://youtube.com/shorts/LgyWJlb8Kis',
      paras: [
        'Growth without visibility is just activity. ClearSky’s reporting layer turns every signal the platform captures — every session, every call, every conversion, every channel interaction — into a structured set of KPIs that tell you exactly what is working, what is not, and where to invest next.',
        'Which channels are producing qualified leads versus empty traffic. Which content sequences are moving visitors from Comparison to Active Project. Which persona segments are converting at the highest value. Which communication hub sequences are closing jobs and which ones are going silent. Every metric is attributed, not assumed. Every month the numbers get sharper because the platform is learning.',
        'Four hours of dedicated support turns that intelligence into plain-English decisions. And every report is a direct accountability statement against the licensing fee and the twenty percent revenue growth guarantee.',
        'Growth stops being a feeling and starts being a number you can read, verify, and hold us to.'
      ]
    },
    'Network': {
      hero: '/images/features/hero-network.jpg',
      titleBar: null,
      play: false,
      heroW: 470,
      videoHref: 'https://youtube.com/shorts/IG0gQo7RADY',
      paras: [
        'No single plumber, electrician, or HVAC contractor generates enough data to see what is actually driving decisions in their market. One trades business talking to thirty visitors a month cannot detect which trust signals are converting in the current season, which emergency patterns are spiking before a cold snap hits, or which content sequences are moving homeowners from comparison to booked job.',
        'A network of trades businesses across rural North America talking to hundreds of thousands of visitors can. ClearSky pools anonymised behavioural signals across every trades client — conversion patterns, emergency demand spikes, seasonal behaviour, content performance, review velocity — so the intelligence every contractor receives is built at a scale no individual business could reach alone.',
        'Every contractor contributes. Every contractor benefits. And because every client operates in a protected market, that data sharing carries zero risk. You are learning from the network. Never sharpening a competitor’s edge.'
      ]
    }
  };

  let active = null;
  let activeVideo = null;
  const open = (label) => { if (modals[label]) active = label; };
  const close = () => { active = null; activeVideo = null; };
  
  const openVideo = (href) => {
    if (href && href !== '#') {
      let embed = href;
      if (href.includes('shorts/')) embed = href.replace('shorts/', 'embed/') + '?autoplay=1';
      else if (href.includes('youtu.be/')) embed = href.replace('youtu.be/', 'www.youtube.com/embed/') + '?autoplay=1';
      activeVideo = embed;
    }
  };
  const closeVideo = () => { activeVideo = null; };

  // Append the visitor fingerprint to the viewroom embed URL so a2p recognises the same
  // user across origins (FingerprintJS alone can differ between localhost ports/domains).
  const withFp = (url) => {
    if (!url || typeof window === 'undefined') return url;
    try {
      const fp = window.localStorage.getItem('fingerprintId') || window.localStorage.getItem('fingerprint') || window.localStorage.getItem('fp');
      if (!fp) return url;
      const u = new URL(url);
      u.searchParams.set('fp', fp);
      return u.toString();
    } catch {
      return url;
    }
  };
</script>

<svelte:window on:keydown={(e) => e.key === 'Escape' && close()} />

<section class="features">
  <div class="features-inner">
    <h2 class="features-title">{title}</h2>

    {#each categories as cat, i}
      {#if i > 0}<div class="row-divider"></div>{/if}
      <div class="cat-group">
        <div class="cat-label">{cat.name}</div>
        <div class="tile-row">
          {#each cat.items as it}
            <button class="tile" type="button" on:click={() => open(it.label)}>
              <span class="chip"><img src={it.icon} alt={it.label} /></span>
              <span class="tile-label">{it.label}</span>
            </button>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

{#if active}
  {@const m = modals[active]}
  <div class="modal-overlay" on:click|self={close}>
    <div class="modal" role="dialog" aria-modal="true" aria-label={active}>
      <div class="modal-head">
        <button class="modal-back" type="button" on:click={close}>&larr; Back</button>
        <button class="modal-close" type="button" on:click={close}><span class="x">&times;</span> close</button>
      </div>
      <div class="modal-top">
        <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions a11y-missing-attribute -->
        <a class="modal-hero" style="width:{m.heroW}px; cursor:{m.videoHref !== '#' ? 'pointer' : 'default'};" on:click|preventDefault={() => openVideo(m.videoHref)}>
          {#if m.titleBar}<div class="hero-bar">{m.titleBar}</div>{/if}
          <img src={m.hero} alt={`${active} video`} />
          {#if m.play}<span class="hero-play"></span>{/if}
        </a>
        <div class="cta-col">
          <a class="cta cta-ai" href="#">Ask our AI</a>
          <a class="cta cta-consult" href="#">15 Minute Consult</a>
        </div>
      </div>
      <div class="modal-body">
        {#each m.paras as p}<p>{p}</p>{/each}
        {#if m.embedUrl}
          <div class="modal-embed">
            <iframe src={withFp(m.embedUrl)} title={`${active} Live Room`} frameborder="0" allow="camera; microphone; display-capture; autoplay; clipboard-write; encrypted-media; fullscreen" allowfullscreen></iframe>
          </div>
        {/if}
      </div>
    </div>
  </div>
{/if}

{#if activeVideo}
  <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
  <div class="video-lightbox" on:click={closeVideo}>
    <button class="video-lightbox-close" on:click|stopPropagation={closeVideo} aria-label="Close video">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
    </button>
    <div class="video-wrapper" on:click|stopPropagation>
      <iframe src={activeVideo} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="Video"></iframe>
    </div>
  </div>
{/if}

<style>
  .features { width: 100%; background: #fff; padding: 40px 0 60px; }
  .features-inner { max-width: 1200px; margin: 0 auto; padding: 0 30px; box-sizing: border-box; }
  .features-title { text-align: center; font-family: 'Inter', sans-serif; font-size: 30px; font-weight: 700; color: #4267AD; margin: 0 0 40px; }

  .cat-group { padding: 6px 0; }
  .cat-label { display: inline-flex; align-items: center; gap: 10px; font-family: 'Inter', sans-serif; font-size: 19px; font-weight: 700; color: #1F2A44; margin: 0 0 18px 4px; }
  .cat-label::before { content: ""; width: 4px; height: 18px; border-radius: 2px; background: #F5841F; display: inline-block; }

  .tile-row { display: grid; grid-template-columns: repeat(5, 1fr); gap: 16px; }
  .tile { appearance: none; border: 0; background: transparent; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 14px; padding: 18px 12px 16px; border-radius: 12px; transition: transform .18s ease, box-shadow .18s ease, background-color .18s ease; font-family: inherit; }
  .chip { width: 88px; height: 88px; border-radius: 16px; background: #fff; border: 1px solid #E6ECF5; display: flex; align-items: center; justify-content: center; transition: border-color .18s ease, box-shadow .18s ease; }
  .chip img { width: 58px; height: 58px; object-fit: contain; display: block; }
  .tile-label { font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 600; color: #1F2A44; text-align: center; line-height: 1.3; position: relative; padding-bottom: 8px; }
  .tile-label::after { content: ""; position: absolute; left: 50%; bottom: 0; height: 2px; width: 0; background: #F5841F; transform: translateX(-50%); transition: width .22s ease; }
  .tile:hover { transform: translateY(-4px); background: #F7F9FC; box-shadow: 0 10px 24px rgba(40,70,120,.10); }
  .tile:hover .chip { border-color: #CFE0F2; box-shadow: 0 4px 12px rgba(40,70,120,.08); }
  .tile:hover .tile-label { color: #3D6DB5; }
  .tile:hover .tile-label::after { width: 34px; }
  .row-divider { height: 1px; background: #E6ECF5; margin: 22px 0; }

  .modal-overlay { position: fixed; inset: 0; background: rgba(20,30,50,.55); display: flex; align-items: flex-start; justify-content: center; padding: 48px 20px; overflow-y: auto; z-index: 1000; }
  .modal { background: #fff; width: 100%; max-width: 920px; border-radius: 10px; padding: 20px 40px 36px; box-shadow: 0 24px 60px rgba(20,30,50,.35); position: relative; box-sizing: border-box; }
  .modal-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
  .modal-back, .modal-close { background: none; border: 0; font-family: 'Inter', sans-serif; font-size: 15px; cursor: pointer; color: #5b6b86; padding: 4px; display: inline-flex; align-items: center; gap: 6px; }
  .modal-back:hover, .modal-close:hover { color: #1F2A44; }
  .modal-close .x { font-size: 18px; line-height: 1; }
  .modal-top { position: relative; min-height: 240px; margin: 6px 0 22px; }
  .modal-hero { display: block; max-width: 72%; margin: 0 auto; border-radius: 8px; overflow: hidden; position: relative; box-shadow: 0 10px 26px rgba(0,0,0,.18); text-decoration: none; }
  .modal-hero img { width: 100%; height: auto; display: block; }
  .hero-bar { position: absolute; top: 0; left: 0; right: 0; background: rgba(20,30,50,.80); color: #fff; font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 700; text-align: center; padding: 8px 10px; z-index: 2; }
  .hero-play { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 60px; height: 60px; border-radius: 50%; background: rgba(255,255,255,.92); display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(0,0,0,.3); }
  .hero-play::after { content: ""; border-style: solid; border-width: 12px 0 12px 20px; border-color: transparent transparent transparent #3D6DB5; margin-left: 4px; }
  .cta-col { position: absolute; top: 16px; right: 0; display: flex; flex-direction: column; gap: 12px; width: 168px; }
  .cta { display: inline-block; text-align: center; font-family: 'Inter', sans-serif; font-size: 15px; font-weight: 700; padding: 12px 16px; border-radius: 6px; text-decoration: none; cursor: pointer; border: 0; color: #fff; }
  .cta-ai { background: #3D6DB5; } .cta-ai:hover { background: #335c9b; }
  .cta-consult { background: #F5841F; } .cta-consult:hover { background: #e0741a; }
  .modal-body p { font-family: 'Inter', sans-serif; font-size: 15px; line-height: 1.6; color: #333; margin: 0 0 14px; }
  .modal-body p:last-child { margin-bottom: 0; }
  .modal-embed { margin-top: 24px; width: 100%; border-radius: 10px; overflow: hidden; box-shadow: 0 6px 20px rgba(40,70,120,.12); border: 1px solid #E6ECF5; background: #000; }
  .modal-embed iframe { width: 100%; height: 540px; display: block; border: 0; }
  
  .video-lightbox { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.85); z-index: 10001; display: flex; align-items: center; justify-content: center; padding: 20px; backdrop-filter: blur(4px); }
  .video-wrapper { width: 100%; max-width: 1100px; aspect-ratio: 16 / 9; background: #000; border-radius: 12px; overflow: hidden; box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4); }
  .video-wrapper iframe { width: 100%; height: 100%; }
  .video-lightbox-close { position: absolute; top: 20px; right: 30px; background: rgba(255, 255, 255, 0.1); border: none; color: white; width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: background 0.2s; }
  .video-lightbox-close:hover { background: rgba(255, 255, 255, 0.2); }
  .video-lightbox-close svg { width: 28px; height: 28px; }
</style>
