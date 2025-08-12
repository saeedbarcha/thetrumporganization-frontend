import React from "react";
import Sublayout from "../../layouts/Sublayout";
import InputsAdmin from "../../components/admin/Inputs";
import AdminHeader from "../../components/admin/Header";
import ManagedAffiliatesAdmin from "../../components/admin/ManagedAffiliates";
import { AffiliateProvider } from "../../context/AffiliateContext";

const AdminDashboard = () => {
  return (
    <Sublayout>
      <AdminHeader />
      <AffiliateProvider>
        <InputsAdmin />
        <ManagedAffiliatesAdmin />
      </AffiliateProvider>
    </Sublayout>
  );
};

export default AdminDashboard;
