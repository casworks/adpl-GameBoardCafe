const state = {
  assets: {
    facilities: [
      {
        id: "F-01",
        name: "Meeting Room Kecil",
        desc: "Kapasitas 4 orang • LCD, whiteboard, AC, WiFi",
        status: "Tersedia",
      },
      {
        id: "F-02",
        name: "Meeting Room Menengah",
        desc: "Kapasitas 6 orang • LCD, speaker, AC, WiFi",
        status: "Dipinjam",
      },
      {
        id: "F-03",
        name: "Meeting Room Besar",
        desc: "Kapasitas 8 orang • LCD, mic, AC, WiFi",
        status: "Tersedia",
      },
      {
        id: "F-04",
        name: "Presentation / Training Room",
        desc: "Kapasitas 10-12 orang • Sound system, mic, AC",
        status: "Tersedia",
      },
      {
        id: "F-05",
        name: "Chess (Catur)",
        desc: "Board game strategi",
        status: "Tersedia",
      },
      {
        id: "F-06",
        name: "Checkers (Dam)",
        desc: "Board game strategi",
        status: "Tersedia",
      },
      {
        id: "F-07",
        name: "Go Board",
        desc: "Board game strategi",
        status: "Tersedia",
      },
      {
        id: "F-08",
        name: "Othello",
        desc: "Board game strategi",
        status: "Tersedia",
      },
      {
        id: "F-09",
        name: "Chinese Chess (Xiangqi)",
        desc: "Board game strategi",
        status: "Tersedia",
      },
      {
        id: "F-10",
        name: "Monopoly",
        desc: "Board game keluarga",
        status: "Tersedia",
      },
      {
        id: "F-11",
        name: "Monopoly Deal",
        desc: "Board game keluarga",
        status: "Tersedia",
      },
      {
        id: "F-12",
        name: "Ludo",
        desc: "Board game keluarga",
        status: "Tersedia",
      },
      {
        id: "F-13",
        name: "Snakes and Ladders",
        desc: "Board game keluarga",
        status: "Tersedia",
      },
      {
        id: "F-14",
        name: "The Game of Life",
        desc: "Board game keluarga",
        status: "Tersedia",
      },
      {
        id: "F-15",
        name: "UNO",
        desc: "Board game party",
        status: "Dipinjam",
      },
      {
        id: "F-16",
        name: "UNO Stacko",
        desc: "Board game party",
        status: "Tersedia",
      },
      {
        id: "F-17",
        name: "Exploding Kittens",
        desc: "Board game party",
        status: "Tersedia",
      },
      {
        id: "F-18",
        name: "Werewolf",
        desc: "Board game party",
        status: "Tersedia",
      },
      {
        id: "F-19",
        name: "Cards Against Humanity",
        desc: "Board game party",
        status: "Tersedia",
      },
      {
        id: "F-20",
        name: "Scrabble",
        desc: "Board game edukasi",
        status: "Tersedia",
      },
      {
        id: "F-21",
        name: "Boggle",
        desc: "Board game edukasi",
        status: "Tersedia",
      },
      {
        id: "F-22",
        name: "Codenames",
        desc: "Board game edukasi",
        status: "Tersedia",
      },
      {
        id: "F-23",
        name: "Sequence",
        desc: "Board game edukasi",
        status: "Tersedia",
      },
      {
        id: "F-24",
        name: "Quiz Board Game",
        desc: "Board game edukasi",
        status: "Tersedia",
      },
      {
        id: "F-25",
        name: "Playing Cards (Kartu Remi)",
        desc: "Board game kartu",
        status: "Tersedia",
      },
      {
        id: "F-26",
        name: "Poker Set",
        desc: "Board game kartu",
        status: "Tersedia",
      },
      {
        id: "F-27",
        name: "Bridge Cards",
        desc: "Board game kartu",
        status: "Tersedia",
      },
      {
        id: "F-28",
        name: "Blackjack Set",
        desc: "Board game kartu",
        status: "Tersedia",
      },
      {
        id: "F-29",
        name: "Chess Board Kayu",
        desc: "Game meja lainnya",
        status: "Tersedia",
      },
      {
        id: "F-30",
        name: "Chess Board Magnetik",
        desc: "Game meja lainnya",
        status: "Tersedia",
      },
      {
        id: "F-31",
        name: "Monopoly Board Deluxe",
        desc: "Game meja lainnya",
        status: "Tersedia",
      },
      {
        id: "F-32",
        name: "Mini Board Game Travel Set",
        desc: "Game meja lainnya",
        status: "Tersedia",
      },
      {
        id: "F-33",
        name: "Puzzle Board 500 pcs",
        desc: "Game meja lainnya",
        status: "Tersedia",
      },
      {
        id: "F-34",
        name: "Puzzle Board 1000 pcs",
        desc: "Game meja lainnya",
        status: "Tersedia",
      },
      {
        id: "F-35",
        name: "Jenga",
        desc: "Game meja lainnya",
        status: "Tersedia",
      },
      {
        id: "F-36",
        name: "Domino",
        desc: "Game meja lainnya",
        status: "Tersedia",
      },
      {
        id: "F-37",
        name: "Mahjong Set",
        desc: "Game meja lainnya",
        status: "Tersedia",
      },
    ],
    equipment: [
      {
        id: "P-01",
        name: "Timer permainan",
        total: 5,
        available: 3,
        status: "Tersedia",
      },
      {
        id: "P-02",
        name: "Jam dinding",
        total: 3,
        available: 3,
        status: "Tersedia",
      },
      {
        id: "P-03",
        name: "Scoreboard kecil",
        total: 4,
        available: 4,
        status: "Tersedia",
      },
      {
        id: "P-04",
        name: "Spidol papan tulis",
        total: 12,
        available: 12,
        status: "Tersedia",
      },
      {
        id: "P-05",
        name: "Kertas catatan",
        total: 25,
        available: 25,
        status: "Tersedia",
      },
      {
        id: "P-06",
        name: "Pulpen",
        total: 30,
        available: 30,
        status: "Tersedia",
      },
      {
        id: "P-07",
        name: "Stop kontak tambahan",
        total: 6,
        available: 6,
        status: "Tersedia",
      },
      {
        id: "P-08",
        name: "Extension cable",
        total: 4,
        available: 4,
        status: "Tersedia",
      },
    ],
  },
  loans: [
    {
      id: "PMJ-2024",
      borrower: "Raka",
      phone: "08123456001",
      type: "Fasilitas",
      items: [{ id: "F-02", name: "Meeting Room Menengah", qty: 1 }],
      start: "2026-01-04T10:00",
      end: null,
      status: "Aktif",
      officer: "Petugas",
      note: "Diskusi proyek internal.",
    },
    {
      id: "PMJ-2023",
      borrower: "Naya",
      phone: "08123456002",
      type: "Fasilitas",
      items: [{ id: "F-15", name: "UNO", qty: 1 }],
      start: "2026-01-04T13:20",
      end: null,
      status: "Aktif",
      officer: "Petugas",
      note: "Sesi board game keluarga.",
    },
    {
      id: "PMJ-2022",
      borrower: "Fajar",
      phone: "08123456003",
      type: "Fasilitas",
      items: [{ id: "F-01", name: "Meeting Room Kecil", qty: 1 }],
      start: "2026-01-02T19:00",
      end: "2026-01-02T22:30",
      status: "Selesai",
      officer: "Petugas",
      note: "Mentoring tim kecil.",
    },
    {
      id: "PMJ-2021",
      borrower: "Dina",
      phone: "08123456004",
      type: "Perlengkapan",
      items: [{ id: "P-01", name: "Timer permainan", qty: 2 }],
      start: "2026-01-04T09:00",
      end: null,
      status: "Aktif",
      officer: "Petugas",
      note: "Dipakai untuk turnamen internal.",
    },
    {
      id: "PMJ-2020",
      borrower: "Rendi",
      phone: "08123456005",
      type: "Perlengkapan",
      items: [{ id: "P-04", name: "Spidol papan tulis", qty: 4 }],
      start: "2026-01-03T09:00",
      end: "2026-01-03T12:00",
      status: "Selesai",
      officer: "Petugas",
      note: "Sesi pelatihan.",
    },
    {
      id: "PMJ-2019",
      borrower: "Lala",
      phone: "08123456006",
      type: "Fasilitas",
      items: [{ id: "F-04", name: "Presentation / Training Room", qty: 1 }],
      start: "2026-01-01T14:00",
      end: "2026-01-01T17:45",
      status: "Selesai",
      officer: "Petugas",
      note: "Workshop internal.",
    },
  ],
  officer: {
    name: "Petugas",
  },
};

let loanCounter = 1025;

const loginScreen = document.getElementById("loginScreen");
const app = document.getElementById("app");
const userName = document.getElementById("userName");

const navButtons = document.querySelectorAll(".nav-btn");
const viewSections = document.querySelectorAll(".view");
const navLinks = document.querySelectorAll("[data-nav]");
const tabButtons = document.querySelectorAll(".tab");

const facilitySelect = document.getElementById("facilitySelect");
const equipmentSelect = document.getElementById("equipmentSelect");
const returnSelect = document.getElementById("returnSelect");

const facilityForm = document.getElementById("facilityForm");
const equipmentForm = document.getElementById("equipmentForm");
const returnForm = document.getElementById("returnForm");

const facilityAddForm = document.getElementById("facilityAddForm");
const equipmentAddForm = document.getElementById("equipmentAddForm");

const receiptPreview = document.getElementById("receiptPreview");

const statActiveLoans = document.getElementById("statActiveLoans");
const statAvailableFacilities = document.getElementById("statAvailableFacilities");
const statAvailableEquipment = document.getElementById("statAvailableEquipment");
const statTotalAssets = document.getElementById("statTotalAssets");

const activeLoanList = document.getElementById("activeLoanList");
const availableAssetList = document.getElementById("availableAssetList");
const returnLoanList = document.getElementById("returnLoanList");

const facilityList = document.getElementById("facilityList");
const equipmentList = document.getElementById("equipmentList");
const historyTable = document.getElementById("historyTable");
const heroHistoryTable = document.getElementById("heroHistoryTable");

const historySearch = document.getElementById("historySearch");
const historyStatusFilter = document.getElementById("historyStatusFilter");
const globalSearch = document.getElementById("globalSearch");

const toast = document.getElementById("toast");

function pad(number) {
  return number.toString().padStart(2, "0");
}

function getLocalDatetimeValue(date = new Date()) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function formatDateTime(value) {
  if (!value) return "-";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function setView(viewName) {
  viewSections.forEach((section) => {
    section.classList.toggle("active", section.id === `view-${viewName}`);
  });
  navButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === viewName);
  });
}

function setTab(tabName) {
  tabButtons.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.tab === tabName);
  });
  facilityForm.classList.toggle("hidden", tabName !== "fasilitas");
  equipmentForm.classList.toggle("hidden", tabName !== "perlengkapan");
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

function buildReceiptText(loan) {
  const assetNames = loan.items
    .map((item) => `${item.name}${item.qty > 1 ? ` x${item.qty}` : ""}`)
    .join(", ");
  return `ID: ${loan.id}
Nama: ${loan.borrower}
Aset: ${assetNames}
Waktu pinjam: ${formatDateTime(loan.start)}
Status: ${loan.status}`;
}

function updateReceipt(loan) {
  receiptPreview.textContent = buildReceiptText(loan);
}

function updateStats() {
  const activeLoans = state.loans.filter((loan) => loan.status === "Aktif");
  statActiveLoans.textContent = activeLoans.length;
  statAvailableFacilities.textContent = state.assets.facilities.filter(
    (asset) => asset.status === "Tersedia"
  ).length;
  statAvailableEquipment.textContent = state.assets.equipment.reduce(
    (sum, asset) => sum + asset.available,
    0
  );
  statTotalAssets.textContent =
    state.assets.facilities.length + state.assets.equipment.length;
}

function renderActiveLoans() {
  const activeLoans = state.loans.filter((loan) => loan.status === "Aktif");
  activeLoanList.innerHTML = "";
  returnLoanList.innerHTML = "";
  if (activeLoans.length === 0) {
    const empty = document.createElement("div");
    empty.className = "list-item";
    empty.textContent = "Belum ada peminjaman aktif.";
    activeLoanList.appendChild(empty);
    returnLoanList.appendChild(empty.cloneNode(true));
    return;
  }

  activeLoans.slice(0, 4).forEach((loan) => {
    const item = document.createElement("div");
    item.className = "list-item";
    item.innerHTML = `
      <div>
        <strong>${loan.borrower}</strong>
        <div>${loan.items.map((asset) => asset.name).join(", ")}</div>
      </div>
      <span class="status busy">Aktif</span>
    `;
    activeLoanList.appendChild(item);
  });

  activeLoans.forEach((loan) => {
    const item = document.createElement("div");
    item.className = "list-item";
    item.innerHTML = `
      <div>
        <strong>${loan.id}</strong>
        <div>${loan.borrower} - ${loan.items
          .map((asset) => asset.name)
          .join(", ")}</div>
      </div>
      <span class="status busy">Aktif</span>
    `;
    returnLoanList.appendChild(item);
  });
}

function renderAvailableAssets() {
  availableAssetList.innerHTML = "";
  const availableFacilities = state.assets.facilities.filter(
    (asset) => asset.status === "Tersedia"
  );
  const availableEquipment = state.assets.equipment.filter(
    (asset) => asset.available > 0
  );

  const items = [...availableFacilities, ...availableEquipment].slice(0, 5);
  if (items.length === 0) {
    const empty = document.createElement("div");
    empty.className = "list-item";
    empty.textContent = "Semua aset sedang dipinjam.";
    availableAssetList.appendChild(empty);
    return;
  }

  items.forEach((asset) => {
    const item = document.createElement("div");
    item.className = "list-item";
    const statusText =
      asset.available !== undefined ? `${asset.available} unit` : asset.status;
    item.innerHTML = `
      <div>
        <strong>${asset.name}</strong>
        <div>${asset.desc || "Perlengkapan aktif"}</div>
      </div>
      <span class="status">${statusText}</span>
    `;
    availableAssetList.appendChild(item);
  });
}

function renderAssetList(container, assets, type) {
  container.innerHTML = "";
  assets.forEach((asset) => {
    const item = document.createElement("div");
    item.className = "asset-card";
    const statusLabel =
      type === "facility"
        ? asset.status
        : `${asset.available}/${asset.total} unit`;
    item.innerHTML = `
      <div>
        <strong>${asset.name}</strong>
        <div class="asset-meta">
          <span>${asset.desc || "Perlengkapan standar"}</span>
          <span class="status ${
            asset.status === "Dipinjam" ? "busy" : ""
          }">${statusLabel}</span>
        </div>
      </div>
      <div class="asset-actions">
        <button class="btn ghost small" data-action="edit" data-id="${
          asset.id
        }" data-type="${type}">Edit</button>
        <button class="btn ghost small" data-action="delete" data-id="${
          asset.id
        }" data-type="${type}">Hapus</button>
      </div>
    `;
    container.appendChild(item);
  });
}

function renderAssetOptions() {
  facilitySelect.innerHTML = "";
  equipmentSelect.innerHTML = "";

  const availableFacilities = state.assets.facilities.filter(
    (asset) => asset.status === "Tersedia"
  );
  if (availableFacilities.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Tidak ada fasilitas tersedia";
    facilitySelect.appendChild(option);
  } else {
    availableFacilities.forEach((asset) => {
      const option = document.createElement("option");
      option.value = asset.id;
      option.textContent = `${asset.name} - ${asset.desc}`;
      facilitySelect.appendChild(option);
    });
  }

  const availableEquipment = state.assets.equipment.filter(
    (asset) => asset.available > 0
  );
  if (availableEquipment.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Tidak ada perlengkapan tersedia";
    equipmentSelect.appendChild(option);
  } else {
    availableEquipment.forEach((asset) => {
      const option = document.createElement("option");
      option.value = asset.id;
      option.textContent = `${asset.name} - ${asset.available} unit`;
      equipmentSelect.appendChild(option);
    });
  }
}

function renderReturnOptions() {
  returnSelect.innerHTML = "";
  const activeLoans = state.loans.filter((loan) => loan.status === "Aktif");
  if (activeLoans.length === 0) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Tidak ada peminjaman aktif";
    returnSelect.appendChild(option);
    return;
  }

  activeLoans.forEach((loan) => {
    const option = document.createElement("option");
    option.value = loan.id;
    option.textContent = `${loan.id} - ${loan.borrower} - ${loan.items
      .map((item) => item.name)
      .join(", ")}`;
    returnSelect.appendChild(option);
  });
}

function renderHistory() {
  const searchQuery = historySearch.value.toLowerCase();
  const statusFilter = historyStatusFilter.value;
  historyTable.innerHTML = "";

  const filteredLoans = state.loans.filter((loan) => {
    const matchesSearch =
      loan.id.toLowerCase().includes(searchQuery) ||
      loan.borrower.toLowerCase().includes(searchQuery) ||
      loan.items.some((item) => item.name.toLowerCase().includes(searchQuery));
    const matchesStatus =
      statusFilter === "all" || loan.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (filteredLoans.length === 0) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td colspan="6">Tidak ada data yang cocok.</td>
    `;
    historyTable.appendChild(row);
    return;
  }

  filteredLoans.forEach((loan) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${loan.id}</td>
      <td>${loan.borrower}</td>
      <td>${loan.items.map((item) => item.name).join(", ")}</td>
      <td>${formatDateTime(loan.start)}</td>
      <td>${formatDateTime(loan.end)}</td>
      <td>
        <span class="status ${loan.status === "Aktif" ? "busy" : ""}">
          ${loan.status}
        </span>
      </td>
    `;
    historyTable.appendChild(row);
  });
}

function renderHeroHistory() {
  heroHistoryTable.innerHTML = "";
  const recentLoans = [...state.loans].slice(0, 4);
  if (recentLoans.length === 0) {
    const row = document.createElement("tr");
    row.innerHTML = `<td colspan="4">Belum ada riwayat peminjaman.</td>`;
    heroHistoryTable.appendChild(row);
    return;
  }

  recentLoans.forEach((loan) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${loan.id}</td>
      <td>${loan.borrower}</td>
      <td>${loan.items.map((item) => item.name).join(", ")}</td>
      <td>
        <span class="status ${loan.status === "Aktif" ? "busy" : ""}">
          ${loan.status}
        </span>
      </td>
    `;
    heroHistoryTable.appendChild(row);
  });
}

function renderAll() {
  renderAssetList(facilityList, state.assets.facilities, "facility");
  renderAssetList(equipmentList, state.assets.equipment, "equipment");
  renderAssetOptions();
  renderReturnOptions();
  renderActiveLoans();
  renderAvailableAssets();
  renderHistory();
  renderHeroHistory();
  updateStats();
}

function addFacilityLoan({
  borrower,
  phone,
  assetId,
  start,
  note,
}) {
  const asset = state.assets.facilities.find((item) => item.id === assetId);
  if (!asset || asset.status !== "Tersedia") {
    showToast("Fasilitas tidak tersedia.");
    return;
  }
  asset.status = "Dipinjam";
  const loan = {
    id: `PMJ-${loanCounter++}`,
    borrower,
    phone,
    type: "Fasilitas",
    items: [{ id: asset.id, name: asset.name, qty: 1 }],
    start,
    end: null,
    status: "Aktif",
    officer: state.officer.name,
    note,
  };
  state.loans.unshift(loan);
  updateReceipt(loan);
  showToast("Bukti peminjaman dikirim via WhatsApp.");
  renderAll();
}

function addEquipmentLoan({
  borrower,
  phone,
  assetId,
  qty,
  start,
  note,
}) {
  const asset = state.assets.equipment.find((item) => item.id === assetId);
  const quantity = Number(qty);
  if (!asset || asset.available < quantity || quantity <= 0) {
    showToast("Perlengkapan tidak tersedia.");
    return;
  }
  asset.available -= quantity;
  asset.status = asset.available > 0 ? "Tersedia" : "Dipinjam";
  const loan = {
    id: `PMJ-${loanCounter++}`,
    borrower,
    phone,
    type: "Perlengkapan",
    items: [{ id: asset.id, name: asset.name, qty: quantity }],
    start,
    end: null,
    status: "Aktif",
    officer: state.officer.name,
    note,
  };
  state.loans.unshift(loan);
  updateReceipt(loan);
  showToast("Bukti peminjaman dikirim via WhatsApp.");
  renderAll();
}

function completeReturn({ loanId, condition, note, end }) {
  const loan = state.loans.find((item) => item.id === loanId);
  if (!loan || loan.status !== "Aktif") {
    showToast("Peminjaman tidak ditemukan.");
    return;
  }
  loan.status = "Selesai";
  loan.end = end;
  loan.condition = condition;
  loan.returnNote = note;

  loan.items.forEach((item) => {
    if (loan.type === "Fasilitas") {
      const asset = state.assets.facilities.find((asset) => asset.id === item.id);
      if (asset) {
        asset.status = "Tersedia";
      }
    } else {
      const asset = state.assets.equipment.find((asset) => asset.id === item.id);
      if (asset) {
        asset.available = Math.min(asset.total, asset.available + item.qty);
        asset.status = asset.available > 0 ? "Tersedia" : "Dipinjam";
      }
    }
  });

  showToast("Notifikasi pengembalian dikirim via WhatsApp.");
  renderAll();
}

function handleAssetEdit(assetId, type) {
  if (type === "facility") {
    const asset = state.assets.facilities.find((item) => item.id === assetId);
    if (!asset) return;
    const name = window.prompt("Ubah nama fasilitas", asset.name);
    if (!name) return;
    const desc = window.prompt("Ubah deskripsi fasilitas", asset.desc || "");
    asset.name = name.trim();
    asset.desc = desc ? desc.trim() : "";
    renderAll();
    return;
  }

  const asset = state.assets.equipment.find((item) => item.id === assetId);
  if (!asset) return;
  const name = window.prompt("Ubah nama perlengkapan", asset.name);
  if (!name) return;
  const totalInput = window.prompt("Ubah total unit", asset.total);
  const total = Number(totalInput);
  if (!Number.isFinite(total) || total <= 0) return;
  const diff = total - asset.total;
  asset.name = name.trim();
  asset.total = total;
  asset.available = Math.max(0, asset.available + diff);
  asset.status = asset.available > 0 ? "Tersedia" : "Dipinjam";
  renderAll();
}

function handleAssetDelete(assetId, type) {
  const confirmText = type === "facility" ? "fasilitas" : "perlengkapan";
  if (!window.confirm(`Hapus ${confirmText} ini?`)) return;
  if (type === "facility") {
    state.assets.facilities = state.assets.facilities.filter(
      (item) => item.id !== assetId
    );
  } else {
    state.assets.equipment = state.assets.equipment.filter(
      (item) => item.id !== assetId
    );
  }
  renderAll();
}

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("loginUser").value.trim();
  state.officer.name = username || "Petugas";
  userName.textContent = state.officer.name;
  loginScreen.classList.add("hidden");
  app.classList.remove("hidden");
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  app.classList.add("hidden");
  loginScreen.classList.remove("hidden");
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.view));
});

navLinks.forEach((button) => {
  button.addEventListener("click", () => setView(button.dataset.nav));
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => setTab(button.dataset.tab));
});

facilityForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addFacilityLoan({
    borrower: document.getElementById("facilityBorrower").value.trim(),
    phone: document.getElementById("facilityPhone").value.trim(),
    assetId: facilitySelect.value,
    start: document.getElementById("facilityTime").value,
    note: document.getElementById("facilityNote").value.trim(),
  });
  facilityForm.reset();
  document.getElementById("facilityTime").value = getLocalDatetimeValue();
});

equipmentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addEquipmentLoan({
    borrower: document.getElementById("equipmentBorrower").value.trim(),
    phone: document.getElementById("equipmentPhone").value.trim(),
    assetId: equipmentSelect.value,
    qty: document.getElementById("equipmentQty").value,
    start: document.getElementById("equipmentTime").value,
    note: document.getElementById("equipmentNote").value.trim(),
  });
  equipmentForm.reset();
  document.getElementById("equipmentQty").value = 1;
  document.getElementById("equipmentTime").value = getLocalDatetimeValue();
});

returnForm.addEventListener("submit", (event) => {
  event.preventDefault();
  completeReturn({
    loanId: returnSelect.value,
    condition: document.getElementById("returnCondition").value,
    note: document.getElementById("returnNote").value.trim(),
    end: document.getElementById("returnTime").value,
  });
  returnForm.reset();
  document.getElementById("returnTime").value = getLocalDatetimeValue();
});

facilityAddForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("facilityName").value.trim();
  const desc = document.getElementById("facilityDesc").value.trim();
  if (!name) return;
  const id = `F-${pad(state.assets.facilities.length + 1)}`;
  state.assets.facilities.unshift({
    id,
    name,
    desc,
    status: "Tersedia",
  });
  facilityAddForm.reset();
  renderAll();
});

equipmentAddForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("equipmentName").value.trim();
  const total = Number(document.getElementById("equipmentTotal").value);
  if (!name || !Number.isFinite(total) || total <= 0) return;
  const id = `P-${pad(state.assets.equipment.length + 1)}`;
  state.assets.equipment.unshift({
    id,
    name,
    total,
    available: total,
    status: "Tersedia",
  });
  equipmentAddForm.reset();
  renderAll();
});

facilityList.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;
  const assetId = target.dataset.id;
  const action = target.dataset.action;
  if (action === "edit") handleAssetEdit(assetId, "facility");
  if (action === "delete") handleAssetDelete(assetId, "facility");
});

equipmentList.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;
  const assetId = target.dataset.id;
  const action = target.dataset.action;
  if (action === "edit") handleAssetEdit(assetId, "equipment");
  if (action === "delete") handleAssetDelete(assetId, "equipment");
});

historySearch.addEventListener("input", renderHistory);
historyStatusFilter.addEventListener("change", renderHistory);

globalSearch.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  event.preventDefault();
  historySearch.value = globalSearch.value;
  setView("riwayat");
  renderHistory();
});

document.getElementById("facilityTime").value = getLocalDatetimeValue();
document.getElementById("equipmentTime").value = getLocalDatetimeValue();
document.getElementById("returnTime").value = getLocalDatetimeValue();

renderAll();
