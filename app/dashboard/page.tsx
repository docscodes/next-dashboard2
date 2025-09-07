import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EmployeesStats from "./components/employees/employees-stats";

const DashboardPage = () => {
  return (
    <Tabs defaultValue="employees">
      <TabsList className="mb-4">
        <TabsTrigger value="employees">Employees stats</TabsTrigger>
        <TabsTrigger value="teams">Teams stats</TabsTrigger>
      </TabsList>

      <TabsContent value="employees">
        <EmployeesStats />
      </TabsContent>

      <TabsContent value="teams">
        <p>Teams stats</p>
      </TabsContent>
    </Tabs>
  );
};

export default DashboardPage;
