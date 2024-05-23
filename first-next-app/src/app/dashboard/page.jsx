import Link from "next/link";
import styles from "../page.module.css";
import CustomCard from "@/components/CustomCard";
import BasicGrid from "@/components/BasicGrid";
import MUIForm from "@/components/MUIForm";
import MUIDialog from "@/components/MUIDialog";
import SxExample from "@/components/SxExample";
import BasicUsage from "@/components/BasicUsage";

// Save as page.jsx in app/about
export default function Dashboard() {
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <p>
        This is the Dashboard page. Nothing to see, go{" "}
        <Link href="/">home</Link>.
      </p>
      <CustomCard title="Iguana">Green Lizard Card</CustomCard>
      <BasicGrid></BasicGrid>
      <MUIForm></MUIForm>
      <MUIDialog></MUIDialog>
      <SxExample></SxExample>
      <BasicUsage></BasicUsage>
    </div>
  );
}
