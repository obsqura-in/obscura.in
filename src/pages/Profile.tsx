import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Calendar, Package, Trash2, AlertTriangle } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Profile = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  const handleDeleteAccount = async () => {
    setIsDeleting(true);
    try {
      // Sign out the user first
      await signOut();
      
      // Note: Full account deletion requires a backend function with service role
      // For now, we sign out and show a message
      toast.success("You have been signed out. Contact support@obsqura.com to complete account deletion.");
      navigate("/");
    } catch (error) {
      toast.error("Failed to process account deletion request.");
    } finally {
      setIsDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse font-display text-2xl text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const createdAt = user.created_at ? new Date(user.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : 'N/A';

  const lastSignIn = user.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }) : 'N/A';

  // Mock previous orders - in a real app, this would come from the database
  const previousOrders: Array<{
    id: string;
    date: string;
    items: string[];
    total: number;
    status: string;
  }> = [];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-light text-foreground mb-4">
                My Profile
              </h1>
              <p className="font-body text-muted-foreground">
                Manage your account and view your order history
              </p>
            </div>

            {/* Profile Information */}
            <Card className="mb-8 bg-card border-border">
              <CardHeader>
                <CardTitle className="font-display text-2xl font-light flex items-center gap-3">
                  <User className="h-6 w-6 text-primary" />
                  Account Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address
                    </label>
                    <p className="font-body text-foreground text-lg">{user.email}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Member Since
                    </label>
                    <p className="font-body text-foreground text-lg">{createdAt}</p>
                  </div>

                  <div className="space-y-2">
                    <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      Last Sign In
                    </label>
                    <p className="font-body text-foreground text-lg">{lastSignIn}</p>
                  </div>

                  <div className="space-y-2">
                    <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      Account ID
                    </label>
                    <p className="font-body text-muted-foreground text-sm font-mono">
                      {user.id.slice(0, 8)}...{user.id.slice(-4)}
                    </p>
                  </div>
                </div>

                {user.user_metadata?.full_name && (
                  <div className="space-y-2">
                    <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      Full Name
                    </label>
                    <p className="font-body text-foreground text-lg">{user.user_metadata.full_name}</p>
                  </div>
                )}

                {user.user_metadata?.avatar_url && (
                  <div className="space-y-2">
                    <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      Profile Picture
                    </label>
                    <img 
                      src={user.user_metadata.avatar_url} 
                      alt="Profile" 
                      className="w-20 h-20 rounded-full object-cover border-2 border-primary/20"
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Previous Orders */}
            <Card className="mb-8 bg-card border-border">
              <CardHeader>
                <CardTitle className="font-display text-2xl font-light flex items-center gap-3">
                  <Package className="h-6 w-6 text-primary" />
                  Previous Orders
                </CardTitle>
              </CardHeader>
              <CardContent>
                {previousOrders.length === 0 ? (
                  <div className="text-center py-12">
                    <Package className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                    <p className="font-body text-muted-foreground mb-2">No orders yet</p>
                    <p className="font-body text-sm text-muted-foreground/70 mb-6">
                      When you make a purchase, your order history will appear here.
                    </p>
                    <Button 
                      variant="hero" 
                      onClick={() => navigate("/")}
                    >
                      Start Shopping
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {previousOrders.map((order) => (
                      <div key={order.id} className="border border-border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-body text-sm text-muted-foreground">Order #{order.id}</p>
                            <p className="font-body text-foreground">{order.date}</p>
                          </div>
                          <span className="font-body text-xs tracking-wider uppercase px-3 py-1 rounded-full bg-primary/10 text-primary">
                            {order.status}
                          </span>
                        </div>
                        <p className="font-body text-sm text-muted-foreground">{order.items.join(", ")}</p>
                        <p className="font-body text-foreground mt-2">Total: ${order.total.toFixed(2)}</p>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            <Separator className="my-8" />

            {/* Danger Zone */}
            <Card className="border-destructive/30 bg-destructive/5">
              <CardHeader>
                <CardTitle className="font-display text-2xl font-light flex items-center gap-3 text-destructive">
                  <AlertTriangle className="h-6 w-6" />
                  Danger Zone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-body text-muted-foreground mb-6">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
                
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive" className="gap-2">
                      <Trash2 className="h-4 w-4" />
                      Delete Account
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-background border-border">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="font-display text-2xl">
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription className="font-body text-muted-foreground">
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers. You will need to contact support
                        to complete the deletion process.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="font-body">Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={handleDeleteAccount}
                        disabled={isDeleting}
                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                      >
                        {isDeleting ? "Processing..." : "Yes, delete my account"}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
