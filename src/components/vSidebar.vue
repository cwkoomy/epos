<template>
    <!-- Layout navigation-->
    <div id="layoutDrawer_nav">
        <!-- Drawer navigation-->
        <nav class="drawer accordion drawer-light bg-white" id="drawerAccordion">
            <div class="drawer-menu">
                <div class="nav">
                    <!-- Drawer section heading (Account)-->
                    <div class="drawer-menu-heading d-sm-none">Account</div>
                    <!-- Drawer link (Notifications)-->
                    <a class="nav-link d-sm-none" href="#!">
                        <div class="nav-link-icon"><i class="material-icons">notifications</i></div>
                        Notifications
                    </a>
                    <!-- Drawer link (Messages)-->
                    <a class="nav-link d-sm-none" href="#!">
                        <div class="nav-link-icon"><i class="material-icons">mail</i></div>
                        Messages
                    </a>
                    <!-- Divider-->
                    <div class="drawer-menu-divider d-sm-none"></div>
                    <!-- Drawer section heading (Interface)-->
                    <div class="drawer-menu-heading">Sidebar Data will come in nect part!!</div>
                    
                </div>
                
            </div>
            <!-- Drawer footer        -->
            <div class="drawer-footer border-top">
                <div class="d-flex align-items-center">
                    <i class="material-icons text-muted">account_circle</i>
                    <div class="ms-3">
                        <div class="caption">Logged in as:</div>
                        <div class="small fw-500">Jassa Therichpost</div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    </template>

<script>
export default {
    name: 'vSidebar'
}
</script>