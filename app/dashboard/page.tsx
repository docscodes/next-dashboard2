import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DashboardPage = () => {
  return (
    <Tabs defaultValue="employees">
      <TabsList>
        <TabsTrigger value="employees">Employees stats</TabsTrigger>
        <TabsTrigger value="teams">Teams stats</TabsTrigger>
      </TabsList>

      <TabsContent value="employees">
        <p>Employees stats</p>
      </TabsContent>

      <TabsContent value="teams">
        <p>Teams stats</p>
      </TabsContent>
    </Tabs>
  );
};

export default DashboardPage;
