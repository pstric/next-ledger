import Form from "@/app/ui/itemCategories/edit-form";
import { fetchItemCategoryById } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/breadcrumbs";

export default async function Page(props: { params: Promise<{ id: string }>}) {
    const params = await props.params;
    const id = params.id;
    const [itemCategory] = await Promise.all([
        fetchItemCategoryById(id),
    ]);

    if (!itemCategory) {
        return null;
    }
    
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Item Categories', href: '/dashboard/itemCategories' },
                    {
                        label: 'Edit Item Category',
                        href: `/dashboard/itemCategories/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form itemCategory={itemCategory} />
        </main>
    );
}