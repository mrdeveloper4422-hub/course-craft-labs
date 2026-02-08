import { 
  Users, 
  ScanFace, 
  BookOpen, 
  FolderOpen, 
  MessageSquare, 
  Trophy 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Role-Based Access",
    description: "Dedicated dashboards for Admins, Lecturers, and Students with tailored features and permissions.",
    color: "text-ferretto-purple",
    bgColor: "bg-ferretto-purple/10",
  },
  {
    icon: ScanFace,
    title: "Biometric Attendance",
    description: "Advanced face recognition technology for seamless, secure attendance tracking.",
    color: "text-ferretto-pink",
    bgColor: "bg-ferretto-pink/10",
  },
  {
    icon: BookOpen,
    title: "Course Management",
    description: "Organize, create, and manage courses with intuitive tools and smart categorization.",
    color: "text-ferretto-orange",
    bgColor: "bg-ferretto-orange/10",
  },
  {
    icon: FolderOpen,
    title: "Materials Library",
    description: "Store PDFs, videos, code snippets, and links in a centralized, searchable repository.",
    color: "text-ferretto-cyan",
    bgColor: "bg-ferretto-cyan/10",
  },
  {
    icon: MessageSquare,
    title: "Group Collaboration",
    description: "Real-time chat with code formatting support for effective team communication.",
    color: "text-ferretto-gold",
    bgColor: "bg-ferretto-gold/10",
  },
  {
    icon: Trophy,
    title: "Project Leaderboard",
    description: "Track student projects, progress, and achievements with gamified leaderboards.",
    color: "text-ferretto-purple",
    bgColor: "bg-ferretto-purple/10",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-ferretto-purple/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Powerful Features for{" "}
            <span className="gradient-text">Modern Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage courses, track attendance, and foster collaboration — all in one platform.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group glassmorphism border-border/30 hover:border-primary/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
              style={{ 
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl ${feature.bgColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
