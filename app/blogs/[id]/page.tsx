export default function BlogPage({ params }) {
  const { id } = params;
  return <div className="mt-6">The blog id is:{id}</div>;
}
// export default function BlogPage({ params }: { params: { id: string } }) {
//   return <div className="mt-6">The blog id is: {params.id}</div>;
// }
