import { useState } from "react";
import { movies } from "./data/Movies";

function Usestate() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const updateName = (event) => setName(event.target.value);
  const updateEmail = (event) => setEmail(event.target.value);
  const updateFeedback = (event) => setFeedback(event.target.value);

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const validateForm = () => {
    let newErrors = {};
    if (!name) newErrors.name = "โปรดกรอกชื่อของคุณ";
    if (!email) newErrors.email = "โปรดใส่อีเมลของคุณ";
    else if (!isValidEmail(email)) newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    setErrorMsg(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setSelectedOption("");
    setErrorMsg({});
    setFeedback("");
    setSubmitted(false);
  };

  return (
    <section className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-t-lg flex items-center">
  <span className="text-white text-2xl mr-2">🎬</span>
  <h1 className="text-white text-lg font-semibold">Movie Survey</h1>
</div>

      {submitted ? (
        <div className="p-4 bg-green-50 border border-green-300 rounded-lg mt-4 mb-[10px]">
          <p className="text-green-700 font-semibold">✅ ส่งแบบสำรวจสำเร็จ!</p>
          <p>ชื่อ: {name}</p>
          <p>อีเมล: {email}</p>
          <p>หนังที่เลือก: <span className="text-blue-600">{selectedOption}</span></p>
          <br />
          <hr />
          <br />
          <p>ความคิดเห็น: {feedback || "-"}</p>
          <button onClick={handleReset} className="mt-4 w-full bg-black text-white py-2 rounded-lg">
            🔄 ทำแบบสำรวจใหม่
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">ชื่อ</label>
            <input type="text" value={name} onChange={updateName} className="w-full border p-2 rounded" />
            <p className="text-red-500">{errorMsg.name}</p>
          </div>

          <div>
            <label className="block">อีเมล</label>
            <input type="email" value={email} onChange={updateEmail} className="w-full border p-2 rounded" />
            <p className="text-red-500">{errorMsg.email}</p>
          </div>

          <div>
            <div className="block">เลือกหนังที่ชอบ</div>
            {movies.map((item) => (
              <div key={item.title} className="flex  item-center gap-[5px]" >
                <input type="radio" name="movie" value={item.title} checked={selectedOption === item.title}
                  onChange={(e) => setSelectedOption(e.target.value)} className=" text-lg font-semibold  flex items-start space-x-3 p-2 border rounded-lg hover:bg-gray-100 cursor-pointer flex-col " />
                <label htmlFor="">{item.title} ({item.year}) <p className="text-sm text-gray-600">Director: {item.director}</p>
                </label>
              </div>
            ))}
          </div>

          <div>
            <label className="block">ความคิดเห็นเกี่ยวกับหนัง</label>
            <textarea value={feedback} onChange={updateFeedback} placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..." className="w-full h-[100px] border p-2 rounded"></textarea>
          </div>

          <div className="flex justify-between">
            <button type="button" onClick={handleReset} className="bg-grey-600 px-4 py-2 rounded cursor-pointer">รีเซ็ต</button>
            <button type="submit" className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 rounded-t-lg flex items-center text-white px-4 py-2 rounded cursor-pointer">ส่งแบบสำรวจ</button>
          </div>
        </form>
      )}
    </section>
  );
}

export default Usestate;
