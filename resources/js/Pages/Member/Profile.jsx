import React from "react";
import {useForm, usePage} from "@inertiajs/react";
import MemberLayout from "@/Shared/Layout/AuthenticatedLayout";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import FromPageLayout from "@/Shared/Layout/FromPageLayout";

const Profile = () => {
    const {user} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        full_name: user.full_name || "",
        display_name: user.display_name || "",
        email: user.email || "",
        password: "",
        phone: user.phone || "",
        present_address: user.present_address || "",
        permanent_address: user.permanent_address || "",
        nid: user.nid || "",
        nid_type: user.nid_type || "0",
        institution: user.institution || "",
        company: user.company || "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("user.profile.update"));
    };

    return (
        <FromPageLayout
            breadcumb_link={route('user.dashboard')}
            breadcumb_name={'Edit Profile'}
            breadcumb_action={'Go to Dashboard'}
            loading={processing}
            button_text={'Update Profile'}
            handlFormSubmit={handleSubmit}
        >
            <TextInput

                label="Full Name"
                name="full_name"
                errors={errors.full_name}
                value={data.full_name}
                onChange={(e) =>
                    setData("full_name", e.target.value)
                }
            />
            <TextInput

                label="Display Name"
                name="display_name"
                errors={errors.display_name}
                value={data.display_name}
                onChange={(e) =>
                    setData("display_name", e.target.value)
                }
            />
            <TextInput

                label="Email"
                name="email"
                type="email"
                errors={errors.email}
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
            />
            <TextInput

                label="Password"
                name="password"
                type="password"
                errors={errors.password}
                value={data.password}
                onChange={(e) =>
                    setData("password", e.target.value)
                }
            />
            <TextInput

                label="Phone"
                name="phone"
                type="number"
                errors={errors.phone}
                value={data.phone}
                onChange={(e) => setData("phone", e.target.value)}
            />

            <TextInput

                label="Present Address"
                name="present_address"
                type="text"
                errors={errors.present_address}
                value={data.present_address}
                onChange={(e) =>
                    setData("present_address", e.target.value)
                }
            />

            <TextInput

                label="Permanent Address"
                name="permanent_address"
                type="text"
                errors={errors.permanent_address}
                value={data.permanent_address}
                onChange={(e) =>
                    setData("permanent_address", e.target.value)
                }
            />

            <TextInput

                label="NID"
                name="nid"
                type="text"
                errors={errors.nid}
                value={data.nid}
                onChange={(e) => setData("nid", e.target.value)}
            />
            <SelectInput

                label="NID Type"
                name="nid_type"
                errors={errors.nid_type}
                value={data.nid_type}
                onChange={(e) =>
                    setData("nid_type", e.target.value)
                }
            >
                <option value="1">National ID</option>
                <option value="0">Birth Certificate</option>
            </SelectInput>

            <TextInput

                label="Institution"
                name="institution"
                type="text"
                errors={errors.institution}
                value={data.institution}
                onChange={(e) =>
                    setData("institution", e.target.value)
                }
            />

            <TextInput

                label="Company"
                name="company"
                type="text"
                errors={errors.company}
                value={data.company}
                onChange={(e) => setData("company", e.target.value)}
            />

            <div className="w-full pb-8 pr-6 mb-12">
                <label className="form-label border-b-2">
                    Notes
                </label>

                <div
                    className="pb-8 pr-6 w-full leading-6 text-xl h-40"
                    disabled={true}
                    dangerouslySetInnerHTML={{__html: user.note}}
                ></div>
            </div>
        </FromPageLayout>
    );
};

Profile.layout = (page) => <MemberLayout title={user.full_name} children={page}/>;

export default Profile;
