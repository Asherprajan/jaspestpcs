import { Bug, Shield, Activity, BedDouble, Target } from 'lucide-react';
import { ElementType } from 'react';

export interface Service {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: ElementType;
  detailedContent: string;
  benefits: string[];
  process: { title: string; description: string }[];
}

export const services: Service[] = [
  {
    slug: 'cockroach-control',
    title: 'Cockroach Control',
    description: 'Effective elimination of all cockroach species with advanced gel baiting and targeted spray treatments. Ensuring long-lasting protection.',
    image: '/cockroach-control.png',
    icon: Bug,
    detailedContent: `
      Our professional cockroach control service is designed to completely eradicate severe infestations from your residential or commercial property. As a leading cockroach exterminator, we understand that these resilient pests are not just a nuisance—they are a significant health hazard capable of spreading diseases like Salmonella and triggering asthma. 
      
      We specialize in comprehensive pest control for cockroaches, specifically targeting the common German and American cockroach species prevalent in Kerala's warm, humid climate. Instead of relying solely on generic surface sprays that only kill visible insects, we utilize an advanced, multi-layered approach. Our technicians apply highly attractive, odorless gel baits in strategic, out-of-reach areas such as kitchen cabinets, hinges, and behind electrical appliances. This ensures that the roaches consume the bait and carry it back to their hidden nests, effectively destroying the entire colony from within.
      
      Whether you need to eliminate roaches in your kitchen at home or require a stringent sanitation protocol for your restaurant, our targeted treatments provide a fast knockdown and long-lasting residual protection. Rest easy knowing our solutions are eco-friendly, safe for your family and pets, and proven to deliver a permanently cockroach-free environment.
    `,
    benefits: [
      'Complete eradication of adult cockroaches and their nymphs from hidden nests',
      'Use of safe, odorless, and eco-friendly gel baits approved for kitchens',
      'Prevention of disease transmission and serious food contamination',
      'Long-lasting residual effect ensuring extended protection against re-infestation',
    ],
    process: [
      { title: 'Inspection', description: 'Thorough inspection of the premises to identify cockroach species and pinpoint high-traffic nesting areas.' },
      { title: 'Treatment Plan', description: 'Customized strategy utilizing a combination of gel baits and residual sprays based on the severity of the infestation.' },
      { title: 'Execution', description: 'Precision application of treatments in cracks, crevices, and hiding spots without disrupting your daily routine.' },
      { title: 'Monitoring', description: 'Follow-up visits and sanitation recommendations to ensure complete and permanent elimination.' }
    ]
  },
  {
    slug: 'termite-control',
    title: 'Termite Control',
    description: 'Comprehensive anti-termite treatment for pre and post-construction. Protect your valuable property from silent destroyers.',
    image: '/termiteControl.png',
    icon: Shield,
    detailedContent: `
      Termites, often known as "silent destroyers," can compromise the structural integrity of your property long before you notice any visible damage. As the premier provider of the best termite pest control in the region, we offer uncompromising solutions to safeguard your most valuable asset. 
      
      Our comprehensive anti-termite treatment is tailored for both pre-construction and post-construction phases. For properties currently being built, our pre-construction termite control involves treating the soil and foundation trenches with potent, non-repellent termiticides, creating an impenetrable chemical barrier that stops subterranean termites before they can enter. 
      
      For existing structures facing an active infestation, our post-construction termite treatment utilizes specialized drill-fill-seal techniques. We drill precise holes along the perimeter of your walls and directly inject professional-grade termiticides to reach the termites at their source. We also treat all susceptible wooden furniture and fixtures to eradicate drywood termites. Protect your foundation from termites today with our industry-leading treatments, backed by long-term warranties for absolute peace of mind.
    `,
    benefits: [
      'Total protection of property value and structural integrity against termite damage',
      'Long-term, binding warranties on all pre- and post-construction treatments',
      'Utilization of advanced, non-repellent termiticides that termites cannot detect',
      'Minimal disruption to your daily life with our clean drill-and-seal application methods',
    ],
    process: [
      { title: 'Detailed Survey', description: 'Comprehensive site analysis identifying termite entry points, moisture sources, and the extent of existing damage.' },
      { title: 'Drilling & Injection', description: 'Creating a robust chemical barrier by drilling holes along walls and injecting specialized termiticide.' },
      { title: 'Wood Treatment', description: 'Directly treating infested wooden structures, door frames, and furniture with wood preservatives.' },
      { title: 'Sealing', description: 'Carefully sealing all drilled holes with matching cement or putty to maintain your home’s aesthetics.' }
    ]
  },
  {
    slug: 'rodent-control',
    title: 'Rodent Control',
    description: 'Strategic placement of baits and traps to eradicate rats and mice, preventing disease spread and property damage.',
    image: '/rodentControl.png',
    icon: Activity,
    detailedContent: `
      Rodents, including rats and mice, can cause devastating damage to property by constantly chewing through electrical wires, PVC pipes, and insulation. More alarmingly, they are carriers of severe diseases and can rapidly contaminate your food supply. If you are searching for a reliable rat exterminator, our professional rodent control services are engineered to solve your problem permanently.
      
      Our rodent eradication program goes far beyond placing generic traps. We employ a highly strategic, multi-faceted approach. Our trained technicians conduct a detailed vulnerability assessment to track rodent movement patterns and locate their nesting sites. We then deploy advanced, tamper-proof rodent baiting stations and mechanical traps in highly targeted areas, ensuring the safety of your children and household pets.
      
      To guarantee you get rid of rats permanently, we don't just eliminate the current population; we focus heavily on exclusion. We provide expert recommendations and services to seal structural gaps, cracks, and entry points, effectively fortifying your home or business against any future rodent invasions.
    `,
    benefits: [
      'Immediate and noticeable reduction in the active rodent population',
      'Prevention of expensive structural damage and dangerous electrical fires',
      'Implementation of safe, tamper-resistant bait stations to protect pets and children',
      'Comprehensive sanitization and structural exclusion recommendations for long-term safety',
    ],
    process: [
      { title: 'Vulnerability Assessment', description: 'Identifying rodent access points, food sources, runways, and primary nesting areas.' },
      { title: 'Baiting & Trapping', description: 'Strategic placement of mechanical traps and advanced rodenticides based on behavioral patterns.' },
      { title: 'Exclusion', description: 'Providing actionable recommendations for sealing cracks, gaps, and exterior entryways.' },
      { title: 'Maintenance', description: 'Regular monitoring, carcass removal, and replenishment of bait stations to ensure ongoing protection.' }
    ]
  },
  {
    slug: 'bed-bug-treatment',
    title: 'Bed Bug Treatment',
    description: 'Thorough inspection and specialized chemical treatments to eliminate bed bugs at all life stages for a peaceful sleep.',
    image: '/bedBugTreatment.png',
    icon: BedDouble,
    detailedContent: `
      Bed bugs are incredibly resilient hitchhikers that can turn your sanctuary into a nightmare, causing severe distress and sleepless nights. When facing an infestation, you need an expert bed bug exterminator to properly eradicate them. DIY methods rarely work because they fail to target the hidden eggs.
      
      Our specialized chemical treatment for bed bugs is meticulously designed to eliminate these parasites at every single stage of their life cycle—from the microscopic eggs to the fully mature adults. Our protocol begins with a painstaking bed bug inspection of your mattresses, bed frames, furniture joints, skirting boards, and wall crevices. 
      
      Once the hiding spots are identified, we apply a combination of powerful contact and residual insecticides. Because bed bug eggs are highly resistant to many treatments, our service mandates a strategic follow-up visit. This ensures that any newly hatched nymphs are eradicated before they can reproduce, effectively breaking the breeding cycle so you can finally sleep peacefully without bed bugs.
    `,
    benefits: [
      'Complete restoration of a peaceful, bite-free sleeping environment',
      'Highly thorough treatment covering all potential hiding spots and micro-crevices',
      'Guaranteed elimination of bed bugs across all life stages, including eggs, nymphs, and adults',
      'Expert advice on travel habits and preventative measures to avoid future bed bug introductions',
    ],
    process: [
      { title: 'Deep Inspection', description: 'Meticulously checking mattresses, bed frames, upholstered furniture, and wall crevices.' },
      { title: 'Initial Treatment', description: 'Comprehensive application of specialized contact and residual insecticides in all infested zones.' },
      { title: 'Follow-up Treatment', description: 'A mandatory second visit timed perfectly to target and eliminate newly hatched nymphs.' },
      { title: 'Verification', description: 'A final, thorough inspection to definitively confirm complete bed bug eradication.' }
    ]
  },
  {
    slug: 'ant-control',
    title: 'Ant Control',
    description: 'Targeted solutions to get rid of black ants, red ants, and other invasive ant species from your premises permanently.',
    image: '/antControl.png',
    icon: Target,
    detailedContent: `
      While they may seem small and harmless, ant colonies can rapidly grow to thousands, aggressively foraging for food in your kitchen, damaging your property, and in the case of some species, delivering painful stings. If you are struggling to get rid of ants, our professional ant pest control service offers the permanent ant removal you need.
      
      Whether you are dealing with a relentless black ant invasion in your pantry or require urgent red ant control in your garden, our approach is highly scientific. Spraying visible ants only kills a tiny fraction of the colony. Instead, our expert technicians identify the specific species invading your property to deploy the most attractive and effective baiting systems. 
      
      Worker ants consume this specialized slow-acting bait and carry it deep into the nest to share with the colony, ultimately destroying it from the inside out—including the queen. Combined with a robust exterior perimeter spray, our targeted black ant extermination methods guarantee a sterile, ant-free environment for your home or business.
    `,
    benefits: [
      'Targeted elimination of the entire ant colony from the inside out, including the queen',
      'Highly effective solutions customized for multiple ant species (red ants, black ants, carpenter ants)',
      'Safe, discreet bait application suitable for sensitive areas like kitchens and food prep zones',
      'Long-lasting exterior barrier treatments to prevent any future re-infestations',
    ],
    process: [
      { title: 'Species Identification', description: 'Accurately identifying the invading ant species to select the most attractive and lethal bait.' },
      { title: 'Nest Location', description: 'Carefully tracing ant foraging trails back to their hidden source nests.' },
      { title: 'Targeted Baiting', description: 'Placing specialized, slow-acting baits that worker ants inadvertently carry back to the queen.' },
      { title: 'Barrier Spray', description: 'Applying a long-lasting residual perimeter spray to permanently stop new ants from entering.' }
    ]
  }
];
