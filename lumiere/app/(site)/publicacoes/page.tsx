type PublicationsPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export default function PublicationsPage() {
    return (
        <main>
            <h1>Publicações do grupo Lumière</h1>
        </main>
    );
}