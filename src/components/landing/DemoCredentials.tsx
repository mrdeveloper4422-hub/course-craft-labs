import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, User, Copy, Check } from "lucide-react";
import { useState } from "react";

const credentials = [
  {
    role: "Admin",
    username: "admin",
    password: "admin12345",
    icon: Shield,
    color: "text-ferretto-purple",
    bgColor: "bg-ferretto-purple/10",
    borderColor: "border-ferretto-purple/30",
    description: "Full system access, user management, course creation",
  },
  {
    role: "Student",
    username: "student",
    password: "student123",
    icon: User,
    color: "text-ferretto-cyan",
    bgColor: "bg-ferretto-cyan/10",
    borderColor: "border-ferretto-cyan/30",
    description: "View courses, mark attendance, join group chats",
  },
];

const DemoCredentials = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="relative py-24 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-2 bg-ferretto-gold/20 text-ferretto-gold border-ferretto-gold/30">
            Try It Now
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Demo <span className="gradient-text">Credentials</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Explore Ferretto Edu Pro instantly with these demo accounts. No signup required.
          </p>
        </div>

        {/* Credentials cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {credentials.map((cred, index) => (
            <Card
              key={index}
              className={`glassmorphism ${cred.borderColor} hover:scale-[1.02] transition-all duration-300`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${cred.bgColor}`}>
                    <cred.icon className={`w-6 h-6 ${cred.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{cred.role}</CardTitle>
                    <p className="text-sm text-muted-foreground">{cred.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Username */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Username</p>
                    <p className="font-mono font-bold">{cred.username}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy(cred.username, `${cred.role}-username`)}
                    className="h-8 w-8 p-0"
                  >
                    {copied === `${cred.role}-username` ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                {/* Password */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Password</p>
                    <p className="font-mono font-bold">{cred.password}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleCopy(cred.password, `${cred.role}-password`)}
                    className="h-8 w-8 p-0"
                  >
                    {copied === `${cred.role}-password` ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DemoCredentials;
