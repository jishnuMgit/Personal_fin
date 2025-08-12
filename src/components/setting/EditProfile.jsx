// EditProfile.jsx
import React, { useState } from "react";

const card =
  "rounded-xl shadow-sm border border-gray-400 dark:border-none bg-white dark:bg-[#1d1933]";

const inputBase =
  "w-full rounded-md px-4 py-3 text-sm border border-gray-300 text-gray-900 " +
  "focus:outline-none focus:ring-2 focus:ring-[#3B82F6] " +
  "dark:border-white/10 dark:bg-[#131129] dark:text-gray-200";

const label =
  "block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300";

const SectionTitle = ({ children }) => (
  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
    {children}
  </h3>
);

const EditProfile = () => {
  // Left card state
  const [fullName, setFullName] = useState("");
  const [avatarPreview, setAvatarPreview] = useState(
    "https://i.pravatar.cc/100?img=5"
  );

  // Right card state
  const [emailNew, setEmailNew] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

  // Personal info
  const [info, setInfo] = useState({
    fullName: "Hafsa Humaira",
    email: "hello@example.com",
    address: "123, Central Square, Brooklyn",
    city: "New York",
    country: "",
    zip: "25481",
  });

  const onAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setAvatarPreview(url);
  };

  const saveLeft = () => {
    console.log("Saved (left):", { fullName, avatarPreview });
  };

  const saveRight = () => {
    console.log("Saved (right):", { emailNew, passwordNew });
  };

  const saveInfo = () => {
    console.log("Saved (info):", info);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Top row: two cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Profile – left */}
        <section className={`${card} p-6`}>
          <SectionTitle>User Profile</SectionTitle>

          <div className="space-y-6">
            <div>
              <label className={label}>Full Name</label>
              <input
                className={inputBase}
                placeholder="Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="flex items-start gap-4">
              <img
                src={avatarPreview}
                alt="avatar"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white/10"
              />
              <div className="text-sm">
                <div className="font-semibold text-white/90">
                  Hafsa Humaira
                </div>
                <div className="text-xs text-gray-400">Max file size is 20mb</div>
                <input
                  type="file"
                  accept="image/*"
                  className="mt-3 text-xs text-gray-300 file:mr-3 file:rounded-md file:border file:bg-transparent file:px-3 file:py-2 file:text-xs file:text-gray-200 file:border-white/10"
                  onChange={onAvatarChange}
                />
              </div>
            </div>

            <button
              onClick={saveLeft}
              className="inline-flex items-center justify-center rounded-md bg-[#3B82F6] text-white px-4 py-2 text-sm font-semibold hover:opacity-90"
            >
              Save
            </button>
          </div>
        </section>

        {/* User Profile – right */}
        <section className={`${card} p-6`}>
          <SectionTitle>User Profile</SectionTitle>

          <div className="space-y-6">
            <div>
              <label className={label}>New Email</label>
              <input
                type="email"
                className={inputBase}
                placeholder="Email"
                value={emailNew}
                onChange={(e) => setEmailNew(e.target.value)}
              />
            </div>

            <div>
              <label className={label}>New Password</label>
              <input
                type="password"
                className={inputBase}
                placeholder="••••••••"
                value={passwordNew}
                onChange={(e) => setPasswordNew(e.target.value)}
              />
              <p className="mt-2 text-xs text-gray-400">
                Enable two factor authentication on the security page
              </p>
            </div>

            <button
              onClick={saveRight}
              className="inline-flex items-center justify-center rounded-md bg-[#3B82F6] text-white px-4 py-2 text-sm font-semibold hover:opacity-90"
            >
              Save
            </button>
          </div>
        </section>
      </div>

      {/* Personal Information */}
      <section className={`${card} p-6`}>
        <SectionTitle>Personal Information</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={label}>Full Name</label>
            <input
              className={inputBase}
              value={info.fullName}
              onChange={(e) => setInfo({ ...info, fullName: e.target.value })}
            />
          </div>

          <div>
            <label className={label}>Email</label>
            <input
              type="email"
              className={inputBase}
              value={info.email}
              onChange={(e) => setInfo({ ...info, email: e.target.value })}
            />
          </div>

          <div>
            <label className={label}>Address</label>
            <input
              className={inputBase}
              value={info.address}
              onChange={(e) => setInfo({ ...info, address: e.target.value })}
            />
          </div>

          <div>
            <label className={label}>City</label>
            <input
              className={inputBase}
              value={info.city}
              onChange={(e) => setInfo({ ...info, city: e.target.value })}
            />
          </div>

          <div>
            <label className={label}>Post Code</label>
            <input
              className={inputBase}
              value={info.zip}
              onChange={(e) => setInfo({ ...info, zip: e.target.value })}
            />
          </div>

          <div>
            <label className={label}>Country</label>
            <select
              className={inputBase}
              value={info.country}
              onChange={(e) => setInfo({ ...info, country: e.target.value })}
            >
              <option value="">Select</option>
              <option value="BD">Bangladesh</option>
              <option value="US">United States</option>
              <option value="IN">India</option>
              <option value="GB">United Kingdom</option>
            </select>
          </div>
        </div>

        <button
          onClick={saveInfo}
          className="mt-5 inline-flex items-center justify-center rounded-md bg-[#3B82F6] text-white px-4 py-2 text-sm font-semibold hover:opacity-90"
        >
          Save
        </button>
      </section>
    </div>
  );
};

export default EditProfile;
