import { faBookmark, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Account } from "api/account";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface ILoginForm {
  userId: string;
  password: string;
  rememberUserId?: boolean;
}

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>();
  const [message, setMessage] = useState<string>();
  const { register, handleSubmit, reset } = useForm<ILoginForm>();
  const onSubmit: SubmitHandler<ILoginForm> = async (datas) => {
    await Account.login({ userId: datas.userId, password: datas.password })
      .then((res) => {
        if (datas.rememberUserId) {
          localStorage.setItem("remember_user_id", datas.rememberUserId + "");
          localStorage.setItem("memo_user_id", datas.userId);
        }
        router.push("/");
      })
      .catch((error) => {
        if (error.response.status == 401) {
          setMessage("아이디나 비밀번호가 일치하지 않습니다.");
        }
      });
  };
  useEffect(() => {
    async function fetchToken() {
      await Account.auth()
        .then((res) => {
          if (res.status === 201) {
            setIsLoggedIn(true);
          }
        })
        .catch((err: AxiosError) => {
          if (err.response?.status === 401 || err.response?.status === 403) {
            setIsLoggedIn(false);
          }
        });
    }
    fetchToken();
  }, [router]);
  useEffect(() => {
    const rememberUserId = localStorage.getItem("remember_user_id");
    if (rememberUserId === "true") {
      reset({ rememberUserId: true });
    }
    const memoUserId = localStorage.getItem("memo_user_id");
    if (memoUserId) {
      reset({ userId: memoUserId });
    }
  }, [reset]);
  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn, router]);
  if (isLoggedIn === undefined || isLoggedIn === true) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="login-container">
        <div className="login-background"></div>
        <div className="login-box flex flex-col">
          <div className="login-title">Login</div>
          <div className="w-full h-2/3 px-8">
            <form className="w-full mx-auto" onSubmit={handleSubmit(onSubmit)}>
              <label className="block mb-2 mx-1">
                <span className="text-gray-600 text-lg">
                  <FontAwesomeIcon icon={faUser} /> 아이디
                </span>
                <input
                  {...register("userId", {
                    required: true,
                  })}
                  type="text"
                  className="form-input input-underline"
                  placeholder="아이디를 입력해주세요."
                />
              </label>
              <label className="block mb-2 mx-1">
                <span className="text-gray-600 text-lg">
                  <FontAwesomeIcon icon={faLock} /> 비밀번호
                </span>
                <input
                  {...register("password", {
                    required: true,
                  })}
                  type="password"
                  className="form-input input-underline"
                  placeholder="비밀번호를 입력해주세요."
                />
              </label>
              <label className="block mb-2 mx-1">
                <div className="text-gray-600 text-sm">
                  <FontAwesomeIcon icon={faBookmark} /> 아이디 기억하기
                  <input
                    {...register("rememberUserId")}
                    type="checkbox"
                    className="form-input ml-1 border-2 border-gray-500 rounded-sm"
                  />
                </div>
              </label>
              <div className="flex justify-end mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="w-full rounded-3xl cursor-pointer login-button text-white main-color1 hover:main-color1 focus-visible:ring-gray-500"
                />
              </div>
              {/* <div className="text-center text-red-500 mt-5">
                *로그인 인증 만료 기간은 1일입니다.
              </div> */}
              <div className="text-center text-red-500 mt-5">{message}</div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
