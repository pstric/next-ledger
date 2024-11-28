import Breadcrumbs from "@/app/ui/breadcrumbs";
import CreateItemCategory from "@/app/ui/itemCategories/create-form";

export default async function Page() {
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Item Categories', href: '/dashboard/itemCategories' },
                    {
                        label: 'Create Item Category',
                        href: '/dashboard/itemCategories/create',
                        active: true,
                    },
                ]}
            />
            <CreateItemCategory />
        </main>
    );
}