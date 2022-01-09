import { Account } from "api/account";
import AccountContext from "components/common/contexts/Account.context";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";

export const useAuth = () => {
  const router = useRouter();
  const { setAccount } = useContext(AccountContext);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchAuth = useCallback(async () => {
    try {
      const response = await Account.auth();
      if (response.status === 201) {
        setAccount(response.data);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      router.replace("/login");
    }
  }, [router, setAccount]);

  useEffect(() => {
    fetchAuth();
  }, [fetchAuth]);

  return loading;
};
