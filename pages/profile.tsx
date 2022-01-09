import { transformRole } from "common/functions/transforms";
import AccountContext from "components/common/contexts/Account.context";
import { useAuth } from "hooks/useAuth";
import moment from "moment-timezone";
import { useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IMyProfile {
  id: string;
  userId: string;
  username: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

interface IMyProfileForm {
  userId: string;
  username: string;
}

const ProfilePage = () => {
  const { account } = useContext(AccountContext);
  const isAccountLoading = useAuth();

  const { register, handleSubmit, getValues, control, watch, reset } =
    useForm<IMyProfile>();
  const onSubmit: SubmitHandler<IMyProfileForm> = async (data) => {
    // const { status } = await Account.updateMyProfile({
    //   userId: data.userId,
    //   username: data.username,
    // });
    // if (status === 200 || status == 204) {
    //   setTimeout(() => {
    //     setIsOpen(false);
    //   }, 3000);
    // } else {
    //   setProgressImage("/images/error.svg");
    // }
  };
  useEffect(() => {
    console.log(account);
    if (account) {
      reset({
        userId: account.userId,
        username: account.username,
        role: transformRole(account.role),
        createdAt: moment(account.createdAt)
          .tz("Asia/Seoul")
          .format("YYYY-MM-DD HH:mm:ss"),
        updatedAt: moment(account.updatedAt)
          .tz("Asia/Seoul")
          .format("YYYY-MM-DD HH:mm:ss"),
      });
    }
  }, [account, reset]);
  if (isAccountLoading) {
    return <div>Loading</div>;
  }
  return (
    <div className="login-container">
      <div className="login-background"></div>
      <div className="profile-box flex flex-col">
        <div className="login-title">내 프로필</div>
        <div className="w-full h-2/3 px-8">
          {account && (
            <form
              className="w-full mx-auto flex flex-col h-full"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="userId" className="block mb-2 mx-1">
                <span className="text-gray-600 text-lg">아이디</span>
                <input
                  {...register("userId", { required: true })}
                  type="text"
                  className="form-input input-underline"
                  name="userId"
                />
              </label>
              <label htmlFor="username" className="block mb-2 mx-1">
                <span className="text-gray-600 text-lg">사용자명</span>
                <input
                  {...register("username", { required: true })}
                  type="text"
                  className="form-input input-underline"
                  name="username"
                />
              </label>
              <label htmlFor="role" className="block mb-2 mx-1">
                <span className="text-gray-600 text-lg">권한</span>
                <input
                  {...register("role", { required: true })}
                  type="text"
                  className="form-input input-underline"
                  name="role"
                  readOnly
                />
              </label>
              <label htmlFor="createdAt" className="block mb-2 mx-1">
                <span className="text-gray-600 text-lg">최초 생성일자</span>
                <input
                  {...register("createdAt", { required: true })}
                  type="text"
                  className="form-input input-underline"
                  name="createdAt"
                  readOnly
                />
              </label>
              <label htmlFor="updatedAt" className="block mb-2 mx-1">
                <span className="text-gray-600 text-lg">마지막 변경일자</span>
                <input
                  {...register("updatedAt", { required: true })}
                  type="text"
                  className="form-input input-underline"
                  name="updatedAt"
                  readOnly
                />
              </label>
              <div className="flex justify-end mt-4">
                <button
                  // onClick={() => {
                  //   setTitle(ChangePasswordModalTitle);
                  //   setContent(<ChangePasswordModal />);
                  // }}
                  className="cursor-pointer ml-1.5 form-button text-white bg-orange-500 hover:bg-orange-600 focus-visible:ring-gray-500"
                >
                  비밀번호 변경
                </button>
                <input
                  type="submit"
                  value="Send"
                  className="cursor-pointer ml-1.5 form-button text-white main-color1 hover:main-color1 focus-visible:ring-gray-500"
                />
                {/* <Image
                className={`${showProgress ? `visible` : `invisible`} ml-1`}
                src={progressImage}
                width={30}
                height={30}
                alt="progress"
              /> */}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
