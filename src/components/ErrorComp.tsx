function ErrorComp({ error }: { error: string }) {
  return (
    <div className="flex flex-col gap-6 bg-gray-400 rounded-md">
      <div>
        <p className="text-3xl font-semibold">Oops!.</p>
        <p>An error occured: {error}</p>
      </div>
      <div>
        <p>But don't fret!.</p>
        <button
          className="bg-gray-500 rounded-md font-semibold"
          onClick={() => window.location.reload()}
        >
          Click to Try again
        </button>
      </div>
    </div>
  );
}

export default ErrorComp;
