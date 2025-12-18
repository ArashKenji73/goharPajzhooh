import { ref } from "vue";
import { api, authHeader } from "@/services/api";

export default function useEmployee() {
  const employees = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const getEmployees = async () => {
    loading.value = true;
    error.value = null;

    try {
      const res = await api.get("/employee", {
        headers: authHeader,
      });
      employees.value = res.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  const getEmployeeByID = async (id) => {
    loading.value = true;
    error.value = null;
    try {
      const res = await api.get(`/employee/${id}`, {
        headers: authHeader,
      });
      return res.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  return {
    employees,
    loading,
    error,
    getEmployees,
    getEmployeeByID,
  };
}
