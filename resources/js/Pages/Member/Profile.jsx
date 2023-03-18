import React from "react";
import {Link, usePage, useForm, router, Head} from "@inertiajs/react";
import MemberLayout from "@/Shared/Member/MemberLayout";
import DeleteButton from "@/Shared/DeleteButton";
import LoadingButton from "@/Shared/LoadingButton";
import TextInput from "@/Shared/TextInput";
import SelectInput from "@/Shared/SelectInput";
import FileInput from "@/Shared/FileInput";
import TrashedMessage from "@/Shared/TrashedMessage";
import Select from "react-select";

const Profile = () => {
    const {user} = usePage().props;
    const {data, setData, errors, post, processing} = useForm({
        first_name: user.first_name || "",
        last_name: user.last_name || "",
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

        // NOTE: We are using POST method here, not PUT/PACH. See comment above.
        post(route("user.profile.update"));
    }


    return (
        <div>
            <Head title={`${data.first_name} ${data.last_name}`}/>
            <div className="flex justify-start max-w-lg mb-8">
                <h1 className="text-3xl font-bold">
                    <Link
                        href={route("user.index")}
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        Users
                    </Link>
                    <span className="mx-2 font-medium text-indigo-600">/</span>
                    {data.first_name} {data.last_name}
                </h1>
            </div>
            <div className="w-full overflow-hidden bg-white rounded shadow">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap p-8 -mb-8 -mr-6">
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="First Name"
                            name="first_name"
                            errors={errors.first_name}
                            value={data.first_name}
                            onChange={(e) =>
                                setData("first_name", e.target.value)
                            }
                        />
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Last Name"
                            name="last_name"
                            errors={errors.last_name}
                            value={data.last_name}
                            onChange={(e) =>
                                setData("last_name", e.target.value)
                            }
                        />
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Email"
                            name="email"
                            type="email"
                            errors={errors.email}
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
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
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Phone"
                            name="phone"
                            type="number"
                            errors={errors.phone}
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                        />

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Present Address"
                            name="present_address"
                            type="text"
                            errors={errors.present_address}
                            value={data.present_address}
                            onChange={(e) => setData("present_address", e.target.value)}
                        />

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Permanent Address"
                            name="permanent_address"
                            type="text"
                            errors={errors.permanent_address}
                            value={data.permanent_address}
                            onChange={(e) => setData("permanent_address", e.target.value)}
                        />

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="NID"
                            name="nid"
                            type="text"
                            errors={errors.nid}
                            value={data.nid}
                            onChange={(e) => setData("nid", e.target.value)}
                        />
                        <SelectInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="NID Type"
                            name="nid_type"
                            errors={errors.nid_type}
                            value={data.nid_type}
                            onChange={(e) => setData("nid_type", e.target.value)}
                        >
                            <option value="1">National ID</option>
                            <option value="0">Birth Certificate</option>
                        </SelectInput>

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Institution"
                            name="institution"
                            type="text"
                            errors={errors.institution}
                            value={data.institution}
                            onChange={(e) => setData("institution", e.target.value)}
                        />

                        <TextInput
                            className="w-full pb-8 pr-6 md:w-1/2 lg:w-1/3"
                            label="Company"
                            name="company"
                            type="text"
                            errors={errors.company}
                            value={data.company}
                            onChange={(e) => setData("company", e.target.value)}
                        />


                    </div>
                    <div className="flex items-center justify-end px-8 py-4 bg-gray-100 border-t border-gray-200">
                        <LoadingButton
                            loading={processing}
                            type="submit"
                            className="btn-indigo"
                        >
                            Update Profile
                        </LoadingButton>
                    </div>
                </form>
            </div>
        </div>
    );
};

Profile.layout = (page) => <MemberLayout children={page}/>;

export default Profile;